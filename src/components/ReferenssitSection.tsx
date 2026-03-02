import React, { useState, useEffect, useRef } from 'react';
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

const CategoryImages = ({ category, onImageClick }: { category: typeof workCategories[0]; onImageClick: (src: string) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {category.images.map((img, ii) => (
          <div
            key={ii}
            className={`relative overflow-hidden rounded-xl border border-neutral-800/50 cursor-pointer group aspect-[4/3] transition-all duration-500 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: visible ? `${ii * 150}ms` : '0ms' }}
            onClick={() => onImageClick(img.src)}
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
  );
};

const ReferenssitSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="referenssit" className="py-16 md:py-24 bg-site-bg">
      <div className="px-6 text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-heading mb-3">
          Referenssit
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Tutustu toteuttamiimme kohteisiin työlajeittain.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-3 px-4 mb-10">
        {workCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(i)}
            className={`text-sm md:text-base font-playfair font-bold px-5 py-2 rounded-lg transition-all duration-300 ${
              activeCategory === i
                ? 'bg-heading text-site-bg'
                : 'text-gray-400 hover:text-white border border-neutral-700/50 hover:border-neutral-500'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Full-width images */}
      <div className="px-2 md:px-4">
        <CategoryImages
          key={activeCategory}
          category={workCategories[activeCategory]}
          onImageClick={src => setLightboxImage(src)}
        />
      </div>

      <SimpleLightbox src={lightboxImage} alt="Referenssikuva" onClose={() => setLightboxImage(null)} />
    </section>
  );
};

export default ReferenssitSection;
