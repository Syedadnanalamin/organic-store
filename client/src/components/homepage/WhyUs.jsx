"use client";

import React from "react";
import { Truck, ShieldCheck, HeartHandshake, Package } from "lucide-react";

export default function WhyUs() {
  const cards = [
    {
      icon: <Truck className="w-10 h-10 text-amber-600" />,
      title: "ক্যাশ অন ডেলিভারি",
      description:
        "কোনো অগ্রিম চার্জ দিতে হবে না। ঢাকা এবং ঢাকার বাইরে সারা বাংলাদেশে পণ্য হাতে পেয়ে চেক করে সম্পূর্ণ মূল্য পরিশোধ করুন।",
    },
    {
      icon: <Package className="w-10 h-10 text-amber-600" />,
      title: "নিরাপদ প্যাকেজিং",
      description:
        "আমাদের ঘি প্রিমিয়াম কাঁচের বয়ামে দেওয়া হয়। বয়াম যাতে অক্ষত থাকে সেজন্য ডাবল বাবল র‍্যাপ এবং শক্ত কার্টন ব্যবহার করে নিরাপদ ডেলিভারি নিশ্চিত করি।",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-amber-600" />,
      title: "সন্তুষ্টির গ্যারান্টি (রিটার্ন পলিসি)",
      description:
        "ঘি-এর কোয়ালিটি নিয়ে আমরা শতভাগ আত্মবিশ্বাসী। ডেলিভারিম্যানের সামনে টেস্ট করে যদি ঘ্রাণ বা স্বাদে অসন্তুষ্ট হন, তবে সাথে সাথে ফেরত দিতে পারবেন।",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-amber-600" />,
      title: "সরাসরি নিজস্ব তত্ত্বাবধানে প্রস্তুত",
      description:
        "বাজারের খোলা ঘি নয়, আমাদের ঘি নিজস্ব কারিগর দ্বারা ও কঠোর স্বাস্থ্যবিধি মেনে প্রস্তুত হয়। মান বজায় রাখতে কোনো তৃতীয় পক্ষের সাহায্য নেওয়া হয় না।",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">
            আমাদের সেবার বিশেষত্ব
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            কেন আমাদের ওপর ভরসা রাখবেন?
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full" />
        </div>

        {/* Why Us Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-100 transition-all flex flex-col sm:flex-row items-start gap-6 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                {card.icon}
              </div>

              {/* Text info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 bg-white p-6 rounded-2xl border border-slate-100 flex flex-wrap justify-around items-center gap-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
            <span>🛡️</span> ১০০% নিরাপদ শপিং
          </div>
          <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
            <span>📞</span> ২৪/৭ কাস্টমার সাপোর্ট
          </div>
          <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
            <span>♻️</span> সহজ রিটার্ন পলিসি
          </div>
          <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
            <span>🇧🇩</span> সারা বাংলাদেশে হোম ডেলিভারি
          </div>
        </div>

      </div>
    </section>
  );
}
