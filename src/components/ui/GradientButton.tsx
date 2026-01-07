
import React from 'react';

const GradientButton = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}) => {
  return (
    <button className={`relative group inline-flex items-center justify-center rounded-full min-w-[120px] px-6 py-2.5 text-sm leading-[18px] font-[600] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden ${className}`} {...props}>
      {/* Base Layer: White background */}
      <div className="absolute inset-0 bg-white rounded-full z-0 shadow-[0_4px_20px_rgba(0,0,0,0.15)]" />
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-10" />
      {/* Border - gold heading color */}
      <div className="absolute inset-0 rounded-full border-2 border-heading group-hover:border-heading transition-colors duration-300 z-10" />
      <span className="relative z-20 flex items-center gap-2 text-neutral-900">{children}</span>
    </button>
  );
};

export default GradientButton;
