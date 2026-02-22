import React, { useState } from 'react';
import { X } from 'lucide-react';

const SimpleLightbox = ({
  src,
  alt,
  onClose
}: {
  src: string | null;
  alt: string;
  onClose: () => void;
}) => {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-site-bg/95 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white hover:text-heading transition-colors" onClick={onClose}>
        <X size={40} />
      </button>
      <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" onClick={e => e.stopPropagation()} />
    </div>
  );
};

const galleryImages = [
  { src: '/palvelut/restaurointi-7.jpg', alt: 'Kattotyö' },
  { src: '/palvelut/restaurointi-8.jpg', alt: 'Pilarien restaurointi' },
  { src: '/palvelut/restaurointi-9.jpg', alt: 'Ullakkotyö' },
  { src: '/palvelut/restaurointi-5.jpg', alt: 'Hirsirakenne' },
  { src: '/palvelut/restaurointi-10.jpg', alt: 'Hirsityö' },
  { src: '/palvelut/perinteet-1.jpg', alt: 'Perinteinen rakennus' },
  { src: '/sodergard/1.jpg', alt: 'Hirsirakentaminen' },
  { src: '/sodergard/2.jpg', alt: 'Tiilirakenteet' },
  { src: '/sodergard/3.jpg', alt: 'Puuliitokset' },
  { src: '/sodergard/5.jpg', alt: 'Historiallinen rakennus' },
  { src: '/sodergard/6.jpg', alt: 'Korjaustyö' },
  { src: '/palvelut/laatu-1.jpg', alt: 'Laatutyö' },
];

const ImageGalleryGrid = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 px-6 bg-site-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-heading mb-8 text-center">
          Töitämme
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
              onClick={() => setLightboxImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      <SimpleLightbox src={lightboxImage} alt="Työkuva" onClose={() => setLightboxImage(null)} />
    </section>
  );
};

export default ImageGalleryGrid;
