"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, ArrowLeft, PhoneCall, Gift, ShieldCheck } from "lucide-react";
import Link from "next/link";

function OrderCompleteContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "গ্রাহক";
  const phone = searchParams.get("phone") || "";
  const packageName = searchParams.get("package") || "খাঁটি গাওয়া ঘি";
  const quantity = searchParams.get("quantity") || "1";
  const total = searchParams.get("total") || "0";
  const delivery = searchParams.get("delivery") || "0";

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-amber-50/20 to-white py-16 px-4 flex items-center justify-center">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl" />

      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-amber-100 p-8 text-center space-y-8 animate-in fade-in zoom-in-95 duration-300">
        
        {/* Success Icon */}
        <div className="relative w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-md">
          <CheckCircle className="w-14 h-14" />
          <div className="absolute -inset-1 rounded-full border border-emerald-400 animate-ping opacity-25" />
        </div>

        {/* Heading Copy */}
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-slate-900">
            অর্ডারটি সফল হয়েছে!
          </h1>
          <p className="text-amber-800 font-bold text-sm bg-amber-50 inline-block px-4 py-1.5 rounded-full border border-amber-100/50">
            অর্ডার আইডি: #{Math.floor(100000 + Math.random() * 900000)}
          </p>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed pt-2">
            ধন্যবাদ <strong>{name}</strong>, আমাদের পণ্য নির্বাচন করার জন্য। আপনার অর্ডারটি সফলভাবে রেজিস্টার করা হয়েছে। 
            আমাদের একজন কাস্টমার প্রতিনিধি আগামী ২৪ ঘণ্টার মধ্যে আপনার প্রদত্ত নম্বরে (<strong>{phone}</strong>) কল করে অর্ডারটি কনফার্ম করবেন।
          </p>
        </div>

        {/* Order Details Receipt Card */}
        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left text-sm space-y-3 text-slate-600">
          <h3 className="font-extrabold text-slate-800 text-sm border-b border-slate-200 pb-2 mb-1 flex items-center justify-between">
            <span>অর্ডার রসিদ (Receipt)</span>
            <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> ক্যাশ অন ডেলিভারি
            </span>
          </h3>
          <div className="flex justify-between">
            <span>পণ্য:</span>
            <span className="font-semibold text-slate-800">{packageName}</span>
          </div>
          <div className="flex justify-between">
            <span>পরিমাণ:</span>
            <span className="font-semibold text-slate-800">{quantity} পিস</span>
          </div>
          <div className="flex justify-between">
            <span>ডেলিভারি চার্জ:</span>
            <span className="font-semibold text-slate-800">৳{delivery}</span>
          </div>
          <div className="flex justify-between border-t border-slate-200 pt-2.5 font-bold text-slate-800 text-base">
            <span className="text-slate-900">সর্বমোট পরিশোধযোগ্য বিল:</span>
            <span className="text-amber-600 text-lg">৳{total}</span>
          </div>
        </div>

        {/* Info Alerts */}
        <div className="space-y-3">
          <div className="bg-amber-50/50 border border-amber-200/40 p-4 rounded-xl flex items-center gap-3 justify-center max-w-md mx-auto text-left">
            <Gift className="w-5 h-5 text-amber-600 shrink-0" />
            <p className="text-xs text-amber-900 leading-normal">
              <strong>প্যাকিং স্ট্যাটাস:</strong> আমাদের ঘি নিরাপদ কাঁচের বয়ামে ডাবল বাবল র‍্যাপ করে শক্ত কার্টনে প্যাক করা হচ্ছে যাতে অক্ষত অবস্থায় আপনার ঠিকানায় পৌঁছায়।
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center gap-3 justify-center max-w-md mx-auto text-left">
            <PhoneCall className="w-5 h-5 text-slate-500 shrink-0" />
            <p className="text-xs text-slate-600 leading-normal">
              যেকোনো প্রয়োজনে আমাদের কাস্টমার সার্ভিসে যোগাযোগ করতে পারেন: <a href="tel:+8801712345678" className="font-bold text-slate-850 hover:underline">০১৭১২-৩৪৫৬৭৮</a>
            </p>
          </div>
        </div>

        {/* Go Back CTA */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-amber-600/20 transition-all hover:scale-102 cursor-pointer text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>হোম পেজে ফিরে যান</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function OrderCompletePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-bold text-slate-600">লোড হচ্ছে...</div>}>
      <OrderCompleteContent />
    </Suspense>
  );
}
