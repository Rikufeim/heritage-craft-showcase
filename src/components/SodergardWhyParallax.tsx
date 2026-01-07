"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function SodergardWhyParallax() {
  return (
    <section className="relative bg-black w-full">
      {/* Header positioned at top */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-500 mb-6">
            Miksi valita Södergård?
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Perinteinen rakentaminen modernilla otteella.
          </p>
        </div>
      </div>

      <HeroParallax products={products} />
    </section>
  );
}

/**
 * IMPORTANT:
 * - Put your images into /public/sodergard/ (or any folder under /public)
 * - Use paths like "/sodergard/kuva-1.jpg" (NO "public/" prefix)
 * - Use at least 15 images for best layout (3 rows x 5). If you have fewer,
 *   duplicate some entries to reach 15.
 */
export const products = [
  { title: "Hirsirakentaminen", link: "#", thumbnail: "/sodergard/1.jpg" },
  { title: "Tiilirakenteet", link: "#", thumbnail: "/sodergard/2.jpg" },
  { title: "Puuliitokset", link: "#", thumbnail: "/sodergard/3.jpg" },
  { title: "Restaurointi", link: "#", thumbnail: "/sodergard/4.jpg" },
  { title: "Historiallinen rakennus", link: "#", thumbnail: "/sodergard/5.jpg" },

  { title: "Hirsirakentaminen 2", link: "#", thumbnail: "/sodergard/1.jpg" },
  { title: "Tiilirakenteet 2", link: "#", thumbnail: "/sodergard/2.jpg" },
  { title: "Puuliitokset 2", link: "#", thumbnail: "/sodergard/3.jpg" },
  { title: "Restaurointi 2", link: "#", thumbnail: "/sodergard/4.jpg" },
  { title: "Historiallinen rakennus 2", link: "#", thumbnail: "/sodergard/5.jpg" },

  { title: "Hirsirakentaminen 3", link: "#", thumbnail: "/sodergard/1.jpg" },
  { title: "Tiilirakenteet 3", link: "#", thumbnail: "/sodergard/2.jpg" },
  { title: "Puuliitokset 3", link: "#", thumbnail: "/sodergard/3.jpg" },
  { title: "Restaurointi 3", link: "#", thumbnail: "/sodergard/4.jpg" },
  { title: "Historiallinen rakennus 3", link: "#", thumbnail: "/sodergard/5.jpg" },
];
