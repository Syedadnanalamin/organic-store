"use client";

import React, { useState } from "react";
import { Check, ShoppingBag, CheckCircle, Gift, Truck, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { postOrders } from "@/lib/api/postOrders";
import { generateEventId, fbEvent, getCookie } from "@/lib/pixel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Pricing() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState(null);

  React.useEffect(() => {
    console.log("DEBUG - NEXT_PUBLIC_SERVER_URL:", process.env.NEXT_PUBLIC_SERVER_URL);
    console.log("DEBUG - NEXT_PUBLIC_FACEBOOK_PIXEL_ID:", process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      quantity: "1",
      deliveryArea: "inside",
    },
  });

  // Watch inputs for live price calculations
  const quantityStr = watch("quantity") || "1";
  const deliveryArea = watch("deliveryArea") || "inside";
  const quantity = parseInt(quantityStr, 10);

  const packages = [
    {
      id: "500g",
      name: "৫০০ গ্রাম প্রিমিয়াম প্যাক",
      size: "৫০০ গ্রাম কাঁচের বয়াম",
      regularPrice: 900,
      offerPrice: 750,
      delivery: "ডেলিভারি চার্জ: ঢাকা ৳৬০ | বাইরে ৳১১০",
      features: [
        "১০০% খাঁটি গাওয়া ঘি",
        "দানাদার ও চমৎকার সুবাস",
        "নিরাপদ বাবল র‍্যাপ প্যাকেজিং",
        "ক্যাশ অন ডেলিভারি সুবিধা",
      ],
      badge: "ট্রায়াল প্যাক",
      popular: false,
    },
    {
      id: "1kg",
      name: "১ কেজি বেস্ট সেলার প্যাক",
      size: "১ কেজি কাঁচের বয়াম",
      regularPrice: 1700,
      offerPrice: 1400,
      delivery: "ডেলিভারি চার্জ: ঢাকা ৳৬০ | বাইরে ৳১১০",
      features: [
        "১০০% খাঁটি গাওয়া ঘি",
        "দানাদার ও চমৎকার সুবাস",
        "৩০০ টাকা নগদ সাশ্রয়",
        "নিরাপদ বাবল র‍্যাপ প্যাকেজিং",
        "ক্যাশ অন ডেলিভারি সুবিধা",
      ],
      badge: "বেস্ট সেলার",
      popular: true,
    },
    {
      id: "2kg",
      name: "২ কেজি মেগা প্যাক",
      size: "২টি ১ কেজি কাঁচের বয়াম",
      regularPrice: 3400,
      offerPrice: 2700,
      delivery: "ডেলিভারি চার্জ: ঢাকা ৳৬০ | বাইরে ৳১১০",
      features: [
        "১০০% খাঁটি গাওয়া ঘি",
        "দানাদার ও চমৎকার সুবাস",
        "৭০০ টাকা ধামাকা সাশ্রয়",
        "বিশেষ উপহার (কাঠের ঘি চামচ)",
        "ক্যাশ অন ডেলিভারি সুবিধা",
      ],
      badge: "মেগা সাশ্রয়ী",
      popular: false,
    },
  ];

  // Live calculation variables
  const unitPrice = selectedPack ? selectedPack.offerPrice : 0;
  const productPrice = unitPrice * quantity;
  const deliveryCharge = deliveryArea === "inside" ? 60 : 110;
  const totalPrice = productPrice + deliveryCharge;

  const handleOpenOrder = (pack) => {
    setSelectedPack(pack);
    reset({
      name: "",
      phone: "",
      address: "",
      quantity: "1",
      deliveryArea: "inside",
    });
    setIsOpen(true);

    // Generate unique Event ID for InitiateCheckout
    const eventId = generateEventId("init");
    
    // Client-side Facebook Pixel InitiateCheckout
    fbEvent("InitiateCheckout", {
      content_name: pack.name,
      content_category: "Food",
      value: pack.offerPrice,
      currency: "BDT",
    }, eventId);

    // Server-side CAPI proxy for InitiateCheckout
    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");
    
    let serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';
    if (serverUrl.endsWith('/')) {
      serverUrl = serverUrl.slice(0, -1);
    }
    
    fetch(`${serverUrl}/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_name: "InitiateCheckout",
        event_id: eventId,
        user_data: {
          fbp,
          fbc,
          client_user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        },
        custom_data: {
          content_name: pack.name,
          value: pack.offerPrice,
          currency: "BDT",
        },
        event_source_url: typeof window !== "undefined" ? window.location.href : "",
      }),
    }).catch((err) => console.error("CAPI InitiateCheckout proxy error:", err));
  };

  const onSubmit = async (data) => {
    const purchaseEventId = generateEventId("pur");
    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");

    const orderData = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      quantity: quantity,
      deliveryArea: deliveryArea,
      deliveryCharge: deliveryCharge,
      productPrice: productPrice,
      totalPrice: totalPrice,
      packageName: selectedPack?.name,
      packageId: selectedPack?.id,
      createdAt: new Date().toISOString(),
      // Tracking parameters for server-side CAPI matching
      eventId: purchaseEventId,
      fbp,
      fbc,
      clientUserAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };

    try {
      const response = await postOrders(orderData);
      if (response) {
        setIsOpen(false);

        // Client-side Facebook Pixel Purchase
        fbEvent("Purchase", {
          content_name: selectedPack?.name,
          content_type: "product",
          content_ids: [selectedPack?.id || "ghee"],
          value: totalPrice,
          currency: "BDT",
          num_items: quantity,
        }, purchaseEventId);

        router.push(
          `/order-complete?name=${encodeURIComponent(data.name)}` +
          `&phone=${encodeURIComponent(data.phone)}` +
          `&package=${encodeURIComponent(selectedPack.name)}` +
          `&quantity=${quantity}` +
          `&delivery=${deliveryCharge}` +
          `&total=${totalPrice}`
        );
      } else {
        alert("অর্ডার করতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।");
      }
    } catch (error) {
      console.error("Order submission failed:", error);
      alert("অর্ডার করতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।");
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">
            আমাদের মূল্য তালিকা ও অফার
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            সীমিত সময়ের জন্য বিশেষ ছাড় অফার
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 text-sm md:text-base">
            আপনার পছন্দের সাইজটি নির্বাচন করে সহজে অর্ডার করুন। পণ্য হাতে পেয়ে টাকা পরিশোধ করুন।
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pack) => (
            <div
              key={pack.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pack.popular
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-102 border-2 border-amber-500 lg:-translate-y-2"
                  : "bg-white text-slate-800 shadow-md border border-slate-100 hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              <span
                className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full ${
                  pack.popular
                    ? "bg-amber-500 text-slate-950"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {pack.badge}
              </span>

              {/* Title and Info */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
                <p className={`text-sm ${pack.popular ? "text-slate-400" : "text-slate-500"} mb-6`}>
                  {pack.size}
                </p>

                {/* Price tags */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-4xl font-extrabold ${pack.popular ? "text-amber-400" : "text-amber-600"}`}>
                    ৳{pack.offerPrice}
                  </span>
                  <span className={`text-sm line-through ${pack.popular ? "text-slate-500" : "text-slate-400"}`}>
                    ৳{pack.regularPrice}
                  </span>
                </div>

                <p className={`text-xs font-medium flex items-center gap-1.5 ${pack.popular ? "text-emerald-400" : "text-emerald-600"}`}>
                  <Truck className="w-3.5 h-3.5" />
                  {pack.delivery}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className={`p-0.5 rounded-full shrink-0 mt-0.5 ${
                      pack.popular ? "bg-amber-500/20 text-amber-400" : "bg-emerald-100 text-emerald-700"
                    }`}>
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className={pack.popular ? "text-slate-300" : "text-slate-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleOpenOrder(pack)}
                className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer ${
                  pack.popular
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-400"
                    : "bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-800"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>অর্ডার করুন</span>
              </button>
            </div>
          ))}
        </div>

        {/* Floating COD notification */}
        <div className="mt-12 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
          <span>🛡️</span>
          <span>সারা বাংলাদেশে ক্যাশ অন ডেলিভারি (পণ্য দেখে টাকা পরিশোধ করার সুবিধা)</span>
        </div>

      </div>

      {/* Shadcn Dialog Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg w-full bg-white rounded-3xl border-none p-0 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
          {/* Header */}
          <DialogHeader className="bg-slate-50 px-6 py-5 border-b border-slate-100 shrink-0">
            <DialogTitle className="font-bold text-slate-900 text-lg">অর্ডার ফরম পূরণ করুন</DialogTitle>
            <DialogDescription className="text-xs text-slate-500 mt-1">
              নিচের তথ্যগুলো সঠিক দিয়ে অর্ডারটি কনফার্ম করুন
            </DialogDescription>
          </DialogHeader>

          {/* Dialog Body */}
          <div className="p-6 overflow-y-auto flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Selected Package Banner */}
                {selectedPack && (
                  <div className="bg-amber-50 border border-amber-200/50 p-4 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="text-xs text-amber-800 font-semibold uppercase">নির্বাচিত প্যাকেজ</p>
                      <h4 className="font-bold text-slate-800 text-sm mt-0.5">{selectedPack.name}</h4>
                    </div>
                    <span className="text-xl font-bold text-amber-700">৳{selectedPack.offerPrice}</span>
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="যেমন: মোঃ জাহিদ হাসান"
                    {...register("name", { required: "আপনার নাম লিখুন" })}
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-slate-800 text-sm transition-all ${
                      errors.name ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="যেমন: ০১৭XXXXXXXX"
                    {...register("phone", {
                      required: "আপনার মোবাইল নম্বর লিখুন",
                      pattern: {
                        value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                        message: "১১ ডিজিটের সঠিক মোবাইল নম্বর লিখুন (যেমন: ০১৭১২৩৪৫৬৭৮)"
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-slate-800 text-sm transition-all ${
                      errors.phone ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Quantity Select */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    পরিমাণ (পিস)
                  </label>
                  <select
                    {...register("quantity")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-slate-800 text-sm transition-all bg-white"
                  >
                    <option value="1">১ পিস</option>
                    <option value="2">২ পিস</option>
                    <option value="3">৩ পিস</option>
                    <option value="4">৪ পিস</option>
                    <option value="5">৫ পিস (পারিবারিক অফার)</option>
                  </select>
                </div>

                {/* Delivery Area Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    ডেলিভারি এলাকা <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`flex flex-col items-center justify-center text-center p-3 rounded-xl border cursor-pointer transition-all ${
                      deliveryArea === "inside"
                        ? "border-amber-500 bg-amber-50/20 text-amber-900 font-bold"
                        : "border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}>
                      <span className="text-sm">ঢাকার ভেতরে</span>
                      <span className="text-xs text-amber-700 font-bold mt-1">
                        ৳৬০
                      </span>
                      <input
                        type="radio"
                        value="inside"
                        {...register("deliveryArea")}
                        className="sr-only"
                      />
                    </label>
                    <label className={`flex flex-col items-center justify-center text-center p-3 rounded-xl border cursor-pointer transition-all ${
                      deliveryArea === "outside"
                        ? "border-amber-500 bg-amber-50/20 text-amber-900 font-bold"
                        : "border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}>
                      <span className="text-sm">ঢাকার বাইরে</span>
                      <span className="text-xs text-amber-700 font-bold mt-1">
                        ৳১১০
                      </span>
                      <input
                        type="radio"
                        value="outside"
                        {...register("deliveryArea")}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>

                {/* Address Input */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    সম্পূর্ণ ঠিকানা <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    placeholder="গ্রাম/রোড নম্বর, ইউনিয়ন/পৌরসভা, থানা, জেলা উল্লেখ করুন"
                    {...register("address", { required: "আপনার সম্পূর্ণ ঠিকানা লিখুন" })}
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-slate-800 text-sm transition-all resize-none ${
                      errors.address ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>
                  )}
                </div>

                {/* Live Order Pricing Breakdown */}
                <div className="bg-amber-50/60 border border-amber-200/50 p-4 rounded-2xl space-y-2">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>পণ্য মূল্য ({quantity} পিস):</span>
                    <span className="font-semibold text-slate-800">৳{productPrice}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>ডেলিভারি চার্জ ({deliveryArea === "inside" ? "ঢাকার ভেতরে" : "ঢাকার বাইরে"}):</span>
                    <span className="font-semibold text-slate-800">
                      ৳{deliveryCharge}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-800 pt-2 border-t border-amber-200/60">
                    <span>সর্বমোট মূল্য:</span>
                    <span className="text-amber-700 text-lg">৳{totalPrice}</span>
                  </div>
                </div>

                {/* COD Info */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex gap-2.5 items-center">
                  <span className="text-amber-500">🚚</span>
                  <span className="text-xs text-slate-600 leading-normal">
                    <strong>ক্যাশ অন ডেলিভারি:</strong> কোনো অগ্রিম পেমেন্ট করতে হবে না। পণ্য হাতে পেয়ে চেক করে ডেলিভারিম্যানকে পেমেন্ট করবেন।
                  </span>
                </div>

                {/* Order Confirm Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold rounded-2xl shadow-lg shadow-amber-600/20 transition-all flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? "অর্ডার প্রসেস হচ্ছে..." : `অর্ডার কনফার্ম করুন (৳${totalPrice})`}</span>
                </button>

              </form>
            </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
