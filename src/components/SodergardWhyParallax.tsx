"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function SodergardWhyParallax() {
  return (
    <section className="relative bg-black w-full">
      <HeroParallax products={products} />
    </section>
  );
}

export const products = [
  { title: "Hirsirakentaminen", thumbnail: "/sodergard/1.jpg" },
  { title: "Tiilirakenteet", thumbnail: "/sodergard/2.jpg" },
  { title: "Puuliitokset", thumbnail: "/sodergard/3.jpg" },
  { title: "Historiallinen rakennus", thumbnail: "/sodergard/5.jpg" },
  { title: "Korjaustyö", thumbnail: "/sodergard/6.jpg" },

  { title: "Restaurointi telineet", thumbnail: "/palvelut/restaurointi-4.jpg" },
  { title: "Hirsirakenne", thumbnail: "/palvelut/restaurointi-5.jpg" },
  { title: "Vanha kaupunki", thumbnail: "/palvelut/restaurointi-6.jpg" },
  { title: "Restaurointityö", thumbnail: "/palvelut/restaurointi-1.jpg" },
  { title: "Hirrenveisto", thumbnail: "/palvelut/restaurointi-2.jpg" },
];
