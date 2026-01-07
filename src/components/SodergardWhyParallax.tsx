"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function SodergardWhyParallax() {
  return (
    <section className="relative bg-black w-full">
      {/* Header positioned at top */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-500">
            Miksi valita Södergård?
          </h2>
        </div>
      </div>

      <HeroParallax products={products} />
    </section>
  );
}

export const products = [
  { title: "Hirsirakentaminen", thumbnail: "/sodergard/1.jpg" },
  { title: "Tiilirakenteet", thumbnail: "/sodergard/2.jpg" },
  { title: "Puuliitokset", thumbnail: "/sodergard/3.jpg" },
  { title: "Restaurointi", thumbnail: "/sodergard/4.jpg" },
  { title: "Historiallinen rakennus", thumbnail: "/sodergard/5.jpg" },

  { title: "Hirsirakentaminen 2", thumbnail: "/sodergard/1.jpg" },
  { title: "Tiilirakenteet 2", thumbnail: "/sodergard/2.jpg" },
  { title: "Puuliitokset 2", thumbnail: "/sodergard/3.jpg" },
  { title: "Restaurointi 2", thumbnail: "/sodergard/4.jpg" },
  { title: "Historiallinen rakennus 2", thumbnail: "/sodergard/5.jpg" },
];
