"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function SodergardWhyParallax() {
  return (
    <section className="relative bg-black w-full">
      {/* Header centered over images */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-500 whitespace-nowrap">
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
  { title: "Historiallinen rakennus", thumbnail: "/sodergard/5.jpg" },
  { title: "Restaurointi", thumbnail: "/palvelut/restaurointi-3.jpg" },

  { title: "Hirsirakentaminen 2", thumbnail: "/sodergard/1.jpg" },
  { title: "Tiilirakenteet 2", thumbnail: "/sodergard/2.jpg" },
  { title: "Puuliitokset 2", thumbnail: "/sodergard/3.jpg" },
  { title: "Historiallinen rakennus 2", thumbnail: "/sodergard/5.jpg" },
  { title: "Restaurointi 2", thumbnail: "/palvelut/restaurointi-1.jpg" },
];
