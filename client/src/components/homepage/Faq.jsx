"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "ঘি কি আসল কাঁচের বয়ামে দেওয়া হবে?",
      answer: "হ্যাঁ, আমাদের প্রতিটি ঘি-এর জার প্রিমিয়াম ও পরিবেশবান্ধব কাঁচের বয়ামে দেওয়া হয়। কাঁচের বয়াম ঘি-এর স্বাস্থ্যগুণ, দানাদার গঠন এবং মূল সুবাস দীর্ঘকাল অক্ষুণ্ন রাখতে সাহায্য করে।",
    },
    {
      question: "ডেলিভারি চার্জ কত এবং কতদিনের মধ্যে ডেলিভারি পাব?",
      answer: "১ কেজি বা তার বেশি সাইজের ঘি অর্ডার করলে সারা বাংলাদেশে হোম ডেলিভারি একদম ফ্রি! তবে ৫০০ গ্রাম অর্ডারের ক্ষেত্রে ডেলিভারি চার্জ ৮০ টাকা। ঢাকার ভেতর সাধারণত ২৪ থেকে ৪৮ ঘণ্টা এবং ঢাকার বাইরে ২ থেকে ৩ দিনের মধ্যে ডেলিভারি পাওয়া যায়।",
    },
    {
      question: "গাওয়া ঘি কতদিন ভালো থাকে এবং কিভাবে সংরক্ষণ করব?",
      answer: "আমাদের খাঁটি গাওয়া ঘি সাধারণ তাপমাত্রায় ও শুকনো স্থানে ১ বছর পর্যন্ত অক্ষুণ্ন ও তরতাজা থাকে। এটি ফ্রিজে রাখার কোনো প্রয়োজন নেই। ব্যবহারের সময় বয়ামের ভেতর ভেজা হাত বা ভেজা চামচ এড়িয়ে চলবেন।",
    },
    {
      question: "স্বাদ বা ঘ্রাণ পছন্দ না হলে কি সত্যিই ফেরত দেওয়া যাবে?",
      answer: "অবশ্যই! আমাদের মূল লক্ষ্য গ্রাহকের বিশ্বাস ও সন্তুষ্টি। পণ্য ডেলিভারি নেওয়ার সময় আপনি যদি সুবাস ও মানে অসন্তুষ্ট হন, তবে ডেলিভারিম্যানের কাছে সাথে সাথেই তা ফেরত দিয়ে দিতে পারেন। এর জন্য কোনো রিটার্ন ফি দিতে হবে না।",
    },
    {
      question: "আপনাদের ঘি কি প্রাকৃতিকভাবেই দানাযুক্ত?",
      answer: "হ্যাঁ, ১০০% খাঁটি গাওয়া ঘি ঠান্ডা আবহাওয়ায় প্রাকৃতিকভাবেই দানাদার হয়ে ওঠে। আমাদের ঘি তৈরিতে কোনো ভেজাল তেল বা কেমিক্যাল ব্যবহৃত হয় না বিধায় এটি শতভাগ প্রাকৃতিক দানাযুক্ত এবং এর কালার হালকা সোনালী হলুদ হয়ে থাকে।",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">
            সাধারণ প্রশ্ন ও উত্তর
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            সচরাচর জিজ্ঞাসিত কিছু প্রশ্নাবলী
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full" />
        </div>

        {/* Shadcn Accordion */}
        <Accordion type="single" className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:border-slate-200 transition-all duration-200 data-open:border-amber-400 data-open:bg-amber-50/10 data-open:shadow-sm"
            >
              <AccordionTrigger className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 outline-none hover:no-underline [&_[data-slot=accordion-trigger-icon]]:text-amber-600 [&_[data-slot=accordion-trigger-icon]]:w-5 [&_[data-slot=accordion-trigger-icon]]:h-5">
                <div className="flex items-center gap-3 pr-4 text-left">
                  <HelpCircle className="w-5 h-5 shrink-0 text-amber-600/80" />
                  <span className="text-base md:text-lg text-slate-800 font-bold">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-5 text-slate-600 text-sm md:text-base leading-relaxed bg-white/50 border-t border-slate-100/50">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Support CTA */}
        <div className="mt-16 text-center bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <p className="font-bold text-slate-800 text-lg">অন্য কোনো প্রশ্ন আছে?</p>
          <p className="text-slate-500 text-sm mt-1 mb-4">
            আমাদের কাস্টমার প্রতিনিধিকে সরাসরি কল করতে পারেন অথবা ফেসবুক মেসেঞ্জারে নক দিন।
          </p>
          <a
            href="tel:+8801712345678"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full shadow-md text-sm transition-colors"
          >
            📞 সরাসরি কথা বলুন: ০১৭১২-৩৪৫৬৭৮
          </a>
        </div>

      </div>
    </section>
  );
}
