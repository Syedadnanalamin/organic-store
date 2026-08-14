"use client";

import React from "react";
import { ShieldCheck, Mail, MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent flex items-center gap-2">
              🍯 খাঁটি গাওয়া ঘি
            </span>
            <p className="text-sm leading-relaxed text-slate-500">
              আমরা আপনাকে দিচ্ছি সরাসরি খামার থেকে সংগৃহীত শতভাগ খাঁটি ও প্রাকৃতিক দানাদার গাওয়া ঘি। 
              কোনো প্রকার কেমিক্যাল বা প্রিজারভেটিভ ছাড়া প্রস্তুতকৃত, যা আপনার সুস্বাস্থ্যের জন্য পরম উপকারী।
            </p>
            {/* Social Link */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-slate-300 hover:text-slate-950"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg border-l-4 border-amber-500 pl-3">গুরুত্বপূর্ণ লিংক</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">হোম</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-amber-400 transition-colors">উপকারিতা ও স্বাস্থ্যগুণ</a>
              </li>
              <li>
                <a href="#how-its-made" className="hover:text-amber-400 transition-colors">প্রস্তুত প্রণালী</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">কাস্টমার রিভিউ</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">অর্ডার করুন</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">জিজ্ঞাসিত প্রশ্নাবলী</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg border-l-4 border-amber-500 pl-3">যোগাযোগ করুন</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">হটলাইন নম্বর:</p>
                  <a href="tel:+8801712345678" className="hover:text-amber-400 transition-colors block">
                    ০১৭১২-৩৪৫৬৭৮
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">ইমেইল:</p>
                  <a href="mailto:info@organicstore.com" className="hover:text-amber-400 transition-colors block">
                    info@organicstore.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">অফিস ঠিকানা:</p>
                  <span>হাউজ নং ১৫, রোড নং ৫, ধানমন্ডি, ঢাকা ১২০৯</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Guarantee / Badges */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg border-l-4 border-amber-500 pl-3">নিরাপত্তা ও গ্যারান্টি</h4>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-900 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong>১০০% নিরাপদ কেনাকাটা:</strong> আপনার সন্তুষ্টিই আমাদের একমাত্র লক্ষ্য। মান নিয়ে বিন্দুমাত্র সংশয় থাকলে ক্যাশ অন ডেলিভারিতে ফেরত দেওয়ার সুযোগ রয়েছে।
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 border-t border-slate-800">
                <span className="text-lg">🚚</span>
                <span className="text-xs font-semibold text-slate-300">দ্রুত ডেলিভারি ব্যবস্থা</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© ২০২৬ খাঁটি অর্গানিক স্টোর। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">প্রাইভেসি পলিসি</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-slate-400">শর্তাবলী</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
