"use client";

import React from "react";
import { Sparkles, Heart, Award, Flame, CheckCircle, ShieldCheck } from "lucide-react";

export default function KeyBenefits() {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "শতভাগ খাঁটি ও ভেজালমুক্ত",
      description: "কোনো ডালডা, পাম অয়েল, প্রিজারভেটিভ বা ক্ষতিকারক কেমিক্যাল ছাড়াই সম্পূর্ণ খাঁটি উপায়ে প্রস্তুতকৃত।",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-600" />,
      title: "আসল দানাযুক্ত টেক্সচার",
      description: "ঘি ঠান্ডা হলে এর চমৎকার দানাদার গঠন দৃশ্যমান হয়, যা খাঁটি গাওয়া ঘি-এর সবচেয়ে বড় পরিচয়।",
    },
    {
      icon: <Flame className="w-8 h-8 text-amber-600" />,
      title: "ঐতিহ্যবাহী সুবাস ও স্বাদ",
      description: "মাটির বা স্টিলের পাত্রে হালকা আঁচে জ্বাল দিয়ে তৈরি হয় বলে এর চমৎকার ঘ্রাণ থাকে দীর্ঘস্থায়ী।",
    },
    {
      icon: <Heart className="w-8 h-8 text-amber-600" />,
      title: "হজম ক্ষমতা ও কোলেস্টেরল নিয়ন্ত্রণ",
      description: "এতে রয়েছে বাউটিরিক এসিড যা হজমশক্তি বাড়ায় এবং শরীরের উপকারী কোলেস্টেরল বৃদ্ধিতে সহায়তা করে।",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
      title: "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি",
      description: "অ্যান্টি-অক্সিডেন্ট এবং ভিটামিন A, D, E ও K সমৃদ্ধ ঘি শরীরের রোগ প্রতিরোধ ক্ষমতা বহুগুণ বাড়িয়ে দেয়।",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
      title: "মান নিয়ে ১০০% নিশ্চয়তা",
      description: "আমরা আমাদের ঘি-এর গুণগত মান নিয়ে আত্মবিশ্বাসী। স্বাদে ও ঘ্রাণে সন্তুষ্ট না হলে পাবেন রিফান্ড সুবিধা।",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual embellishment */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">
            কেন আমাদের ঘি সেরা?
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            খাঁটি গাওয়া ঘি-এর আসল বৈশিষ্ট্য ও স্বাস্থ্য উপকারিতা
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-100 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Callout */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-3xl p-8 md:p-12 shadow-xl shadow-amber-600/10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">ঘি-এর বিশুদ্ধতা নিয়ে চিন্তিত?</h3>
            <p className="text-amber-50 text-sm md:text-base max-w-xl">
              আমরা আপনাকে শতভাগ বিশুদ্ধতার নিশ্চয়তা দিচ্ছি। পণ্য রিসিভ করার সময় চেক করে দেখতে পারবেন, কোনো সন্দেহ থাকলে ফেরত দিতে পারবেন।
            </p>
          </div>
          <a
            href="#pricing"
            className="shrink-0 bg-white text-amber-700 font-bold px-8 py-4 rounded-full shadow-md hover:bg-amber-50 transition-colors duration-200"
          >
            অর্ডার করতে এখানে যান
          </a>
        </div>

      </div>
    </section>
  );
}
