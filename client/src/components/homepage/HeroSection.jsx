"use client";

import React from "react";
import { ShieldCheck, Star, ShoppingBag, Phone, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-amber-50/30 to-white"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 left-10 -z-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content (Text and CTAs) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold border border-amber-200/50 shadow-sm animate-bounce">
              <Award className="w-4 h-4 text-amber-600" />
              <span>১০% ছাড় ও ফ্রি ডেলিভারি অফার!</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              ঘ্রাণেই প্রমাণ করে এর{" "}
              <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                বিশুদ্ধতা!
              </span>
              <br />
              সরাসরি খামার থেকে সংগৃহীত খাঁটি গাওয়া ঘি।
            </h1>

            {/* Sub-headline / Main Benefit */}
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              দেশি গরুর দুধের মাখন থেকে ঐতিহ্যবাহী পদ্ধতিতে জ্বাল দিয়ে তৈরি আমাদের এই ঘি।
              কোনো কেমিক্যাল, প্রিজারভেটিভ বা কৃত্রিম সুবাস ছাড়া সম্পূর্ণ প্রাকৃতিকভাবে প্রস্তুতকৃত,
              যা প্রতিটি খাবারে এনে দেবে আসল পুষ্টি ও মনকাড়া সুবাস।
            </p>

            {/* Trust and Key Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-slate-700 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-medium">১০০% কেমিক্যাল মুক্ত</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-slate-100">
                <span className="text-amber-500 font-bold shrink-0">✨</span>
                <span className="text-sm font-medium">চমৎকার দানাযুক্ত</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-slate-700 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-slate-100 justify-center sm:justify-start">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
                <span className="text-sm font-medium">৫/৫ কাস্টমার রেটিং</span>
              </div>
            </div>

            {/* Price Showcase and CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto text-center bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-amber-600/30 hover:shadow-xl hover:shadow-amber-600/40 hover:scale-102 transform transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>অর্ডার করুন (৳৭৫০ থেকে শুরু)</span>
              </a>
              <a
                href="tel:+8801712345678"
                className="w-full sm:w-auto text-center border-2 border-amber-600 text-amber-700 font-bold py-3.5 px-8 rounded-full hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>সরাসরি কল করুন</span>
              </a>
            </div>
          </div>

          {/* Right Product Showcase Card (Image & Badges) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual background circle */}
            <div className="absolute inset-0 m-auto w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/10 rounded-full blur-2xl" />

            {/* Main Visual Card */}
            <div className="relative bg-white p-5 sm:p-6 rounded-3xl shadow-2xl border border-amber-100 max-w-sm sm:max-w-md w-full transform hover:rotate-1 transition-transform duration-300">

              {/* Product Image Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-amber-50 flex items-center justify-center mb-6 shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1707424124274-689499bbe5e9?auto=format&fit=crop&q=80&w=800"
                  alt="খাঁটি গাওয়া ঘি"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />

                {/* Visual Glassmorphism overlay on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md py-2.5 px-4 rounded-xl border border-white/50 shadow-md">
                  <p className="text-xs text-amber-800 font-bold uppercase tracking-wider text-center">
                    প্রাকৃতিক পদ্ধতিতে সংগৃহীত
                  </p>
                </div>
              </div>

              {/* Product Specs on Card */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">খাঁটি গাওয়া ঘি (প্রিমিয়াম)</h3>
                    <p className="text-sm text-slate-500">১০০% প্রাকৃতিক ও দানাযুক্ত</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                    ইন স্টক
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-semibold text-slate-600 ml-2">৪.৯ (১২০+ রিভিউ)</span>
                </div>

                {/* Offer Price Row */}
                <div className="flex items-baseline gap-3 pt-2 border-t border-slate-100">
                  <span className="text-2xl font-bold text-amber-600">৳৭৫০</span>
                  <span className="text-sm text-slate-400 line-through">৳৯০০</span>
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100 ml-auto">
                    ১৬% ছাড়!
                  </span>
                </div>
              </div>
            </div>

            {/* Small floating badges */}
            <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 bg-white py-3 px-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-pulse">
              <span className="text-2xl">🥛</span>
              <div>
                <p className="text-xs text-slate-500 font-medium">দেশি গরুর</p>
                <p className="text-sm font-bold text-slate-800">মাখন থেকে তৈরি</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 bg-emerald-600 text-white py-3 px-4 rounded-2xl shadow-lg flex items-center gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <p className="text-xs text-emerald-100 font-medium">সারা বাংলাদেশে</p>
                <p className="text-sm font-bold">ক্যাশ অন ডেলিভারি</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
