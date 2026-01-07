import React, { useState } from 'react';
import ImageLightbox from './ImageLightbox';

const KorjauksetSection = () => {
  const images = [
    '/palvelut/korjaukset-1.jpg',
    '/palvelut/korjaukset-2.jpg',
    '/palvelut/korjaukset-3.jpg'
  ];
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Left: Text */}
        <div className="flex-1 space-y-6 text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Korjaukset</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Korjausrakentamisessa erikoisosaamistamme ovat haastavat kohteet, kuten hirsirakennusten nosto ja siirto sekä rakenteiden vahvistus.
          </p>
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
                  alt={`Korjaukset ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* 4th image reusing first for symmetry */}
            <div
              onClick={() => setLightboxImage(images[0])}
              className="relative aspect-square overflow-hidden rounded-xl border border-neutral-700 cursor-pointer group"
            >
              <img
                src={images[0]}
                alt="Korjaukset 4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      <ImageLightbox
        isOpen={!!lightboxImage}
        imageSrc={lightboxImage || ''}
        imageAlt="Korjaukset"
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};

export default KorjauksetSection;