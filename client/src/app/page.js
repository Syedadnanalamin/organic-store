import Navbar from "@/components/homepage/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import KeyBenefits from "@/components/homepage/KeyBenefits";
import HowItsMade from "@/components/homepage/HowItsMade";
import Reviews from "@/components/homepage/Reviews";
import Pricing from "@/components/homepage/Pricing";
import WhyUs from "@/components/homepage/WhyUs";
import Faq from "@/components/homepage/Faq";
import Footer from "@/components/homepage/Footer";

export const metadata = {
  title: "খাঁটি গাওয়া ঘি | শতভাগ খাঁটি ও প্রাকৃতিক দানাদার গাওয়া ঘি",
  description: "আমাদের খাঁটি গাওয়া ঘি তৈরি হয় দেশি গরুর দুধের মাখন থেকে ঐতিহ্যবাহী পদ্ধতিতে জ্বাল দিয়ে। এতে নেই কোনো কৃত্রিম সুবাস বা ভেজাল। সারা বাংলাদেশে ক্যাশ অন ডেলিভারি!",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-slate-800">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <KeyBenefits />
        <HowItsMade />
        <Reviews />
        <WhyUs />
        <Pricing />
        <Faq />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

