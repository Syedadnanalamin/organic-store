"use client";

import React, { useState, useEffect } from "react";
import { Menu, Phone, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "হোম", href: "#home" },
    { label: "উপকারিতা", href: "#benefits" },
    { label: "প্রস্তুত প্রণালী", href: "#how-its-made" },
    { label: "রিভিউ", href: "#reviews" },
    { label: "অর্ডার করুন", href: "#pricing" },
    { label: "প্রশ্নাবলী", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent flex items-center gap-2">
              <span className="text-3xl">🍯</span> Organic Store
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-slate-700 transition-colors hover:text-amber-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+8801712345678"
              className="flex items-center gap-2 text-slate-800 font-semibold hover:text-amber-600 transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-600 animate-pulse" />
              <span>০১৭১২-৩৪৫৬৭৮</span>
            </a>
            <a
              href="#pricing"
              className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-bold py-2.5 px-5 rounded-full shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>অর্ডার করুন</span>
            </a>
          </div>

          {/* Mobile Menu Button using Shadcn Sheet */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className="text-slate-800 focus:outline-none p-1 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white p-6 w-[280px] border-l border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <SheetHeader className="p-0 mb-6 text-left">
                    <SheetTitle className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent flex items-center gap-2">
                      🍯 খাঁটি গাওয়া ঘি
                    </SheetTitle>
                    <SheetDescription className="text-xs text-slate-400 mt-1">
                      মেনু নির্বাচন করুন
                    </SheetDescription>
                  </SheetHeader>

                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-slate-700 hover:text-amber-600 transition-colors py-1.5 border-b border-slate-50/50"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <a
                    href="tel:+8801712345678"
                    className="flex items-center gap-2.5 text-slate-700 font-semibold hover:text-amber-600 transition-colors py-2"
                  >
                    <Phone className="w-5 h-5 text-amber-600" />
                    <span>০১৭১২-৩৪৫৬৭৮</span>
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setIsOpen(false)}
                    className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-bold py-3 px-5 rounded-full shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 text-center flex items-center justify-center gap-2 w-full"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>অর্ডার করুন</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
