import React, { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import { ArrowRight } from 'lucide-react';

const GradientButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative group inline-flex items-center justify-center rounded-full min-w-[120px] px-6 py-2.5 text-sm leading-[18px] font-[600] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 via-black to-neutral-900 rounded-full z-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.5)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-10" />
      <div className="absolute inset-0 rounded-full border border-neutral-600 group-hover:border-neutral-500 transition-colors duration-300 z-10" />
      <span className="relative z-20 flex items-center gap-2 text-white">{children}</span>
    </button>
  );
};

const LaatuSection = () => {
  const images = ['/palvelut/laatu-1.jpg', '/palvelut/laatu-2.jpg', '/palvelut/laatu-3.jpg', '/palvelut/laatu-4.jpg'];
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Left: Text */}
        <div className="flex-1 space-y-6 text-left">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-heading">Laatu</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Laatu on yksi perusarvoistamme. Käytämme vain parhaita materiaaleja ja perinteisiä menetelmiä, joilla varmistetaan kestävä lopputulos.
          </p>
          <GradientButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Ota yhteyttä
            <ArrowRight size={20} />
          </GradientButton>
        </div>

        {/* Right: 2x2 Image Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                onClick={() => setLightboxImage(src)}
                className="relative aspect-square overflow-hidden rounded-xl border border-neutral-700 cursor-pointer group"
              >
                <img
                  src={src}
                  alt={`Laatu ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ImageLightbox
        isOpen={!!lightboxImage}
        imageSrc={lightboxImage || ''}
        imageAlt="Laatu"
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};

export default LaatuSection;