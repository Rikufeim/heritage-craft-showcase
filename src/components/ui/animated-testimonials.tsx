"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="w-full antialiased font-sans">
      <div className="relative">
        <div className="relative h-[500px] md:h-[600px] w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 999
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="h-full w-full rounded-3xl object-cover object-center border border-amber-700/30"
                  draggable={false}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={handlePrev}
            className="h-12 w-12 rounded-full bg-neutral-800 border border-amber-700/50 flex items-center justify-center group/button hover:bg-amber-900/30 transition-colors"
          >
            <IconArrowLeft className="h-6 w-6 text-amber-500 group-hover/button:rotate-12 transition-transform duration-300" />
          </button>
          <button
            onClick={handleNext}
            className="h-12 w-12 rounded-full bg-neutral-800 border border-amber-700/50 flex items-center justify-center group/button hover:bg-amber-900/30 transition-colors"
          >
            <IconArrowRight className="h-6 w-6 text-amber-500 group-hover/button:-rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
