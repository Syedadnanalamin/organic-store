"use client";

import React from "react";
import { Star, Quote, ThumbsUp } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "আরিফুর রহমান",
      role: "চাকুরীজীবী, ঢাকা",
      text: "বাচ্চাদের জন্য ভালো ও খাঁটি ঘি খুঁজছিলাম অনেকদিন ধরে। অবশেষে এই ঘি-টি কিনে ভীষণ সন্তুষ্ট। এর সেন্ট খুবই প্রাকৃতিক এবং দানাগুলো একদম নিখুঁত। গরম ভাতের সাথে এই ঘি অতুলনীয়!",
      rating: 5,
      date: "২ দিন আগে",
    },
    {
      name: "উম্মে হাবিবা",
      role: "গৃহিণী, সিলেট",
      text: "আমি সাধারণত রিভিউ দিই না, তবে এদের ঘি-এর মান রিভিউ দিতে বাধ্য করল। কাঁচের বয়ামে সুন্দর করে বাবল র‍্যাপ দিয়ে প্যাক করে পাঠিয়েছে। ঢাকনা খুলতেই যে সুবাস ছড়ালো, তাতেই বুঝেছি এটি শতভাগ খাঁটি।",
      rating: 5,
      date: "১ সপ্তাহ আগে",
    },
    {
      name: "তানজিনা আক্তার",
      role: "অনলাইন উদ্যোক্তা, চট্টগ্রাম",
      text: "প্রথমে ৫০০ গ্রাম অর্ডার দিয়েছিলাম ট্রাই করার জন্য। স্বাদ ও সুবাস এত ভালো লেগেছে যে গতকাল আবার ২ কেজির ফ্যামিলি প্যাক অর্ডার করলাম। ক্যাশ অন ডেলিভারি থাকায় অনেক সুবিধা হয়েছে। ধন্যবাদ!",
      rating: 5,
      date: "৩ দিন আগে",
    },
    {
      name: "মোঃ ফয়সাল",
      role: "শিক্ষক, রাজশাহী",
      text: "ঘি-এর কালার এবং টেক্সচার এক কথায় অসাধারণ। বাজারের ডালডা বা ভেজাল মিশ্রিত ঘি-এর চেয়ে সম্পূর্ণ আলাদা। দাম অনুযায়ী কোয়ালিটি অত্যন্ত প্রিমিয়াম। প্রত্যেকেই ট্রাই করে দেখতে পারেন।",
      rating: 5,
      date: "২ সপ্তাহ আগে",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">
            গ্রাহকের মতামত
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            আমাদের প্রতি গ্রাহকদের ভালোবাসা ও বিশ্বাস
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full" />
        </div>

        {/* Rating Summary & Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Rating Summary Stat Panel */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-800">রিভিউ সামারি</h3>
            
            <div className="flex items-center gap-4">
              <span className="text-5xl font-extrabold text-slate-900">৪.৯</span>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-1">১২০+ পরিবারের সন্তোষজনক রিভিউ</p>
              </div>
            </div>

            {/* Rating distribution progress bars */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 w-12">৫ স্টার</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[96%]" />
                </div>
                <span className="text-xs font-bold text-slate-600">৯৬%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 w-12">৪ স্টার</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[4%]" />
                </div>
                <span className="text-xs font-bold text-slate-600">৪%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 w-12">৩ স্টার</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-[0%]" />
                </div>
                <span className="text-xs font-bold text-slate-600">০%</span>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 flex items-start gap-3">
              <ThumbsUp className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed">
                আমাদের প্রতিটি ঘি-এর জার নিজস্ব তত্ত্বাবধানে প্যাকিং এবং সঠিক মান যাচাইয়ের পরই শিপমেন্ট করা হয়।
              </p>
            </div>
          </div>

          {/* Right Side: Grid of Testimonials */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-100/60 -z-0" />
                <div className="space-y-4 relative z-10">
                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {/* Text */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                {/* Profile info */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 relative z-10">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-500">{review.role}</p>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
