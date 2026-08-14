"use client";

import React from "react";

export default function HowItsMade() {
  const steps = [
    {
      num: "১",
      title: "খামারিদের থেকে দুধ সংগ্রহ",
      desc: "বিশ্বস্ত খামারিদের থেকে সরাসরি দেশি গরুর খাঁটি তরল দুধ সংগ্রহ করা হয়। দুধে কোনো জলীয় ভেজাল নেই তা ল্যাবে পরীক্ষা করে নিশ্চিত করা হয়।",
      img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600",
    },
    {
      num: "২",
      title: "দুধ থেকে মাখন ও ক্রিম প্রস্তুত",
      desc: "সংগৃহীত দুধ থেকে ঐতিহ্যবাহী ঘোল ও মন্থন পদ্ধতিতে ফ্যাট আলাদা করে তরতাজা মাখন প্রস্তুত করা হয়, যা এই ঘি-এর মূল ভিত্তি।",
      img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    },
    {
      num: "৩",
      title: "ধীর আঁচে মাখন জ্বাল দেওয়া",
      desc: "প্রস্তুতকৃত মাখনকে একটি বড় কড়াইতে নিয়ে অত্যন্ত মৃদু আঁচে দীর্ঘক্ষণ ধরে জ্বাল দেওয়া হয়। ধীর জ্বালের কারণে ঘি-এর আসল দানা ও তীব্র সুবাস তৈরি হয়।",
      img: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80&w=600",
    },
    {
      num: "৪",
      title: "ছেঁকে নিয়ে কাঁচের বয়ামে সংরক্ষণ",
      desc: "জ্বাল শেষে তরল ঘি ঠান্ডা করে ছাঁকনি দিয়ে ছেঁকে পরিষ্কার কাঁচের বয়ামে প্যাকিং করা হয়। কাঁচের বয়াম ঘি-এর স্বাদ ও সুবাস দীর্ঘকাল অক্ষুণ্ন রাখে।",
      img: "https://images.unsplash.com/photo-1707424124274-689499bbe5e9?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section id="how-its-made" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">
            আমাদের প্রস্তুত প্রণালী
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            যেভাবে তৈরি হয় আমাদের খাঁটি গাওয়া ঘি
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 text-sm md:text-base">
            আমরা কোনো প্রকার কৃত্রিম রঙ, সুবাস বা কেমিক্যাল ব্যবহার করি না। শতভাগ প্রাকৃতিক উপায়ে ৪টি ধাপে আমাদের ঘি প্রস্তুত হয়।
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-16 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-amber-100 before:-z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 relative ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >

              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-video md:aspect-[4/3] bg-amber-50">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border border-white">
                    {step.num}
                  </div>
                </div>
              </div>

              {/* Center Dot (Visible on Desktop) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-50 border-4 border-amber-500 items-center justify-center z-10 shadow-sm" />

              {/* Text Content Side */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0">
                <div className="p-6 md:p-8 bg-amber-50/40 rounded-2xl border border-amber-100/50 hover:bg-amber-50/60 transition-colors">
                  <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block mb-2">
                    ধাপ ০{step.num}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
