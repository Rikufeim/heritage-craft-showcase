import React from 'react';

const KorjauksetSection = () => {
  const images = [
    '/palvelut/korjaukset-1.jpg',
    '/palvelut/korjaukset-2.jpg',
    '/palvelut/korjaukset-3.jpg'
  ];

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-7xl mx-auto px-6 md:px-12">
      {/* Left: Text */}
      <div className="flex-1 space-y-6 text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-white">Korjaukset</h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          Korjausrakentamisessa erikoisosaamistamme ovat haastavat kohteet, kuten hirsirakennusten nosto ja siirto sekä rakenteiden vahvistus.
        </p>
      </div>

      {/* Right: Image Grid */}
      <div className="flex-1 w-full">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-700 shadow-xl bg-neutral-900 aspect-[4/3]">
            <img
              src={images[0]}
              alt="Korjaukset 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-neutral-700 shadow-xl bg-neutral-900 aspect-square">
            <img
              src={images[1]}
              alt="Korjaukset 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-neutral-700 shadow-xl bg-neutral-900 col-span-2 aspect-[16/9]">
            <img
              src={images[2]}
              alt="Korjaukset 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KorjauksetSection;
