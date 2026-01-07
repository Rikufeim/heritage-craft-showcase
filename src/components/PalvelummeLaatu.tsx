"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CheckCircle2 } from "lucide-react";

const GradientButton = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <button
      className={`relative group inline-flex items-center justify-center rounded-[4px] min-w-[132px] px-9 py-4 text-base leading-[19px] font-[600] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 disabled:pointer-events-none disabled:opacity-50 transition-transform duration-300 hover:scale-105 active:scale-95 overflow-hidden shadow-lg ${className}`}
    >
      <div className="absolute inset-0 bg-black border border-amber-700 rounded-[4px] z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      <span className="relative z-20 flex items-center gap-2 text-white">{children}</span>
    </button>
  );
};

export default function PalvelummeLaatu() {
  const testimonials = [
    {
      quote: "",
      name: "Laatu",
      designation: "",
      src: "/palvelut/laatu-1.jpg",
    },
    {
      quote: "",
      name: "Huolellisuus",
      designation: "",
      src: "/palvelut/laatu-2.jpg",
    },
    {
      quote: "",
      name: "Materiaalit",
      designation: "",
      src: "/palvelut/laatu-3.jpg",
    },
    {
      quote: "",
      name: "Ammattitaito",
      designation: "",
      src: "/palvelut/laatu-4.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-black w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-amber-900/20 rounded-2xl mb-2 border border-amber-800 shadow-sm">
              <CheckCircle2 size={32} className="text-amber-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">Laatu</h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Laatu on yksi perusarvoistamme. Käytämme vain parhaita materiaaleja 
              ja perinteisiä menetelmiä, joilla varmistetaan kestävä lopputulos.
            </p>

            <div className="pt-4">
              <GradientButton>Laadun periaatteet</GradientButton>
            </div>
          </div>

          {/* Right: AnimatedTestimonials - images only */}
          <div className="w-full">
            <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
