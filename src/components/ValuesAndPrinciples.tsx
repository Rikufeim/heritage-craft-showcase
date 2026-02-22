import React from 'react';

const ValuesAndPrinciples = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-site-bg text-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-heading">
          Arvot ja periaatteet
        </h2>

        {/* Mobile: 3 keywords + short text */}
        <div className="md:hidden space-y-10">
          <div className="grid grid-cols-1 gap-8">
            {[
              { title: 'Laatu', desc: 'Tinkimätön käsityö ja materiaalituntemus' },
              { title: 'Kunnioitus', desc: 'Rakennuksen aikakauden ja luonteen vaaliminen' },
              { title: 'Kestävyys', desc: 'Kierrätys, vastuu ja pitkäjänteinen ajattelu' },
            ].map((item) => (
              <div key={item.title} className="space-y-2">
                <p className="text-heading font-playfair font-bold text-2xl">{item.title}</p>
                <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Kaikkea toimintaamme ohjaa rakennuskulttuuriperimän säilyttäminen, kädentaitojen vaaliminen ja tinkimätön laatu. Työ dokumentoidaan avoimesti ja tehdään tiiviissä yhteistyössä asiakkaan kanssa.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:block space-y-12">
          <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { title: 'Laatu', desc: 'Tinkimätön käsityö ja materiaalituntemus' },
              { title: 'Kunnioitus', desc: 'Rakennuksen aikakauden ja luonteen vaaliminen' },
              { title: 'Kestävyys', desc: 'Kierrätys, vastuu ja pitkäjänteinen ajattelu' },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-3">
                <p className="text-heading font-playfair font-bold text-3xl">{item.title}</p>
                <div className="w-10 h-0.5 bg-heading/30 mx-auto" />
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
            Kaikkea toimintaamme ohjaa rakennuskulttuuriperimän säilyttäminen, kädentaitojen vaaliminen ja tinkimätön laatu. Työ dokumentoidaan avoimesti ja tehdään tiiviissä yhteistyössä asiakkaan kanssa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesAndPrinciples;
