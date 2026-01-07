import React from 'react';
import { ArrowRight } from 'lucide-react';

const GradientButton = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button className={`relative group inline-flex items-center justify-center rounded-full min-w-[120px] px-6 py-2.5 text-sm leading-[18px] font-[600] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 disabled:pointer-events-none disabled:opacity-50 transition-transform duration-300 hover:scale-105 active:scale-95 overflow-hidden shadow-lg ${className}`}>
      <div className="absolute inset-0 bg-black border border-amber-700 rounded-full z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full z-10" />
      <span className="relative z-20 flex items-center gap-2 text-white">{children}</span>
    </button>
  );
};

const RestaurointiSection = () => {
  const images = [
    '/palvelut/restaurointi-1.jpg',
    '/palvelut/restaurointi-2.jpg',
    '/palvelut/restaurointi-3.jpg'
  ];

  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 w-full max-w-7xl mx-auto px-6 md:px-12">
      {/* Right: Text */}
      <div className="flex-1 space-y-6 text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-white">Restaurointi</h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          Olemme erikoistuneet puurakennuksien ja perinteisten kohteiden restaurointiin ja entisöintiin. Kunnioitamme alkuperäisiä materiaaleja ja työtapoja.
        </p>
        <div className="pt-4">
          <GradientButton>
            Lue lisää
            <ArrowRight size={16} />
          </GradientButton>
        </div>
      </div>

      {/* Left: Image Grid */}
      <div className="flex-1 w-full">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-700 shadow-xl bg-neutral-900 aspect-[4/3]">
            <img
              src={images[0]}
              alt="Restaurointi 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-neutral-700 shadow-xl bg-neutral-900 aspect-square">
            <img
              src={images[1]}
              alt="Restaurointi 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-neutral-700 shadow-xl bg-neutral-900 col-span-2 aspect-[16/9]">
            <img
              src={images[2]}
              alt="Restaurointi 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurointiSection;
