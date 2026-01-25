import React, { useState } from 'react';
import { X } from 'lucide-react';

const SimpleLightbox = ({ src, alt, onClose }: { src: string | null, alt: string, onClose: () => void }) => {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors" onClick={onClose}>
        <X size={40} />
      </button>
      <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" onClick={e => e.stopPropagation()} />
    </div>
  );
};

// Placeholder reference items - content will be added later
const referenceItems = [
  {
    id: 1,
    title: "Referenssikohde 1",
    description: "Kohteen kuvaus lisätään myöhemmin.",
    image: "/palvelut/restaurointi-1.jpg"
  },
  {
    id: 2,
    title: "Referenssikohde 2",
    description: "Kohteen kuvaus lisätään myöhemmin.",
    image: "/palvelut/restaurointi-2.jpg"
  },
  {
    id: 3,
    title: "Referenssikohde 3",
    description: "Kohteen kuvaus lisätään myöhemmin.",
    image: "/palvelut/restaurointi-3.jpg"
  },
  {
    id: 4,
    title: "Referenssikohde 4",
    description: "Kohteen kuvaus lisätään myöhemmin.",
    image: "/palvelut/restaurointi-4.jpg"
  }
];

const ReferenssitSection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="referenssit" className="py-32 px-6 bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-heading mb-4">
            Referenssit
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tutustu toteuttamiimme restaurointi- ja korjauskohteisiin.
          </p>
        </div>

        {/* Reference Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {referenceItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-heading/50 transition-all duration-500 cursor-pointer"
              onClick={() => setLightboxImage(item.image)}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-white mb-2 group-hover:text-heading transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder message */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            Lisää referenssikohteita lisätään pian.
          </p>
        </div>
      </div>

      <SimpleLightbox
        src={lightboxImage}
        alt="Referenssikuva"
        onClose={() => setLightboxImage(null)}
      />
    </section>
  );
};

export default ReferenssitSection;
