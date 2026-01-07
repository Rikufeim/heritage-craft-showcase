import React, { useState } from 'react';
import ImageLightbox from './ImageLightbox';

const RestaurointiSection = () => {
  const images = [
    '/palvelut/restaurointi-1.jpg',
    '/palvelut/restaurointi-2.jpg',
    '/palvelut/restaurointi-3.jpg'
  ];
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Right: Text */}
        <div className="flex-1 space-y-6 text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Restaurointi</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Olemme erikoistuneet puurakennuksien ja perinteisten kohteiden restaurointiin ja entisöintiin. Kunnioitamme alkuperäisiä materiaaleja ja työtapoja.
          </p>
        </div>

        {/* Left: 2x2 Image Grid */}
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
                  alt={`Restaurointi ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* 4th placeholder with same style */}
            <div
              onClick={() => setLightboxImage(images[0])}
              className="relative aspect-square overflow-hidden rounded-xl border border-neutral-700 cursor-pointer group"
            >
              <img
                src={images[0]}
                alt="Restaurointi 4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      <ImageLightbox
        isOpen={!!lightboxImage}
        imageSrc={lightboxImage || ''}
        imageAlt="Restaurointi"
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};

export default RestaurointiSection;