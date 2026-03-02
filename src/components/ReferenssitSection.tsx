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

const workCategories = [
  {
    title: "Julkisivurestaurointi",
    images: [
      { src: '/palvelut/restaurointi-1.jpg', alt: 'Julkisivutyö' },
      { src: '/palvelut/restaurointi-6.jpg', alt: 'Julkisivun restaurointi' },
    ]
  },
  {
    title: "Puuosat",
    images: [
      { src: '/palvelut/restaurointi-5.jpg', alt: 'Puutyö' },
      { src: '/palvelut/restaurointi-2.jpg', alt: 'Hirrenveisto' },
    ]
  },
  {
    title: "Historialliset rakennukset",
    images: [
      { src: '/palvelut/restaurointi-3.jpg', alt: 'Historiallinen kohde' },
      { src: '/palvelut/restaurointi-4.jpg', alt: 'Restaurointikohde' },
    ]
  },
  {
    title: "Kivikohteet",
    images: [
      { src: '/palvelut/perinteet-1.jpg', alt: 'Kivikohde' },
      { src: '/palvelut/perinteet-2.jpg', alt: 'Kiviperustus' },
    ]
  },
];

const ReferenssitSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="referenssit" className="py-16 md:py-24 bg-site-bg">
      <div className="px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-heading mb-3">
          Referenssit
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Tutustu toteuttamiimme kohteisiin työlajeittain.
        </p>
      </div>

      <div className="space-y-10 px-2 md:px-4">
        {workCategories.map((category, ci) => (
          <div key={ci}>
            <h3 className="text-xl font-playfair font-bold text-white mb-4 px-4">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {category.images.map((img, ii) => (
                <div
                  key={ii}
                  className="relative overflow-hidden rounded-xl border border-neutral-800/50 cursor-pointer group aspect-[4/3]"
                  onClick={() => setLightboxImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <SimpleLightbox src={lightboxImage} alt="Referenssikuva" onClose={() => setLightboxImage(null)} />
    </section>
  );
};

export default ReferenssitSection;
