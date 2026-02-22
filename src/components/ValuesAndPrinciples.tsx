import React from 'react';

const ValuesAndPrinciples = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-site-bg text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-heading">
          Arvot ja periaatteet
        </h2>

        {/* Mobile: 3 keywords + short text */}
        <div className="md:hidden space-y-6">
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <p className="text-heading font-playfair font-bold text-lg">Laatu</p>
            </div>
            <div className="text-center">
              <p className="text-heading font-playfair font-bold text-lg">Kunnioitus</p>
            </div>
            <div className="text-center">
              <p className="text-heading font-playfair font-bold text-lg">Kestävyys</p>
            </div>
          </div>
          <p className="text-gray-400 text-base leading-relaxed">
            Vaalimme rakennuskulttuuriperintöä, kädentaitoja ja tinkimätöntä laatua. Työ dokumentoidaan ja tehdään avoimesti asiakkaan kanssa.
          </p>
        </div>

        {/* Desktop: slightly more detail */}
        <div className="hidden md:block space-y-6">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <p className="text-heading font-playfair font-bold text-xl">Laatu</p>
              <p className="text-gray-400 text-sm">Tinkimätön käsityö ja materiaalituntemus</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-heading font-playfair font-bold text-xl">Kunnioitus</p>
              <p className="text-gray-400 text-sm">Rakennuksen aikakauden ja luonteen vaaliminen</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-heading font-playfair font-bold text-xl">Kestävyys</p>
              <p className="text-gray-400 text-sm">Kierrätys, vastuu ja pitkäjänteinen ajattelu</p>
            </div>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Kaikkea toimintaamme ohjaa rakennuskulttuuriperimän säilyttäminen, kädentaitojen vaaliminen ja tinkimätön laatu. Työ dokumentoidaan avoimesti ja tehdään tiiviissä yhteistyössä asiakkaan kanssa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesAndPrinciples;
