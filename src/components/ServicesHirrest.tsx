
import React from 'react';

const ServicesHirrest = () => {
    return (
        <section className="py-24 px-6 bg-[#0a0a0a] border-t border-neutral-900 border-b border-neutral-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                                Palvelut – <span className="text-amber-600">Hirrest Oy</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-amber-600/30 pl-6">
                                Hirrest Oy keskittyy uuden luomiseen perinteitä kunnioittaen. Veistämme massiiviset hirsikehikot käsityönä ja suunnittelemme kokonaisuuksia, jotka kestävät sukupolvien yli.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Hirsikehikot ja veisto</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Valmistamme massiiviset, käsinveistetyt hirsikehikot. Toimitamme kehikot aina säältä suojattuina, mukaan lukien aluskatteet, ovet ja ikkunat.
                                </p>
                            </div>

                            <div className="w-12 h-px bg-neutral-800" />

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Materiaalit ja ekologisuus</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Käytämme vain parhaita materiaaleja. Eristeenä suosimme pellavaa ja lampaanvillaa. Ratkaisumme ovat täysin luonnonmukaisia ja ekologisesti kestäviä.
                                </p>
                            </div>

                            <div className="w-12 h-px bg-neutral-800" />

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Suunnittelu ja kokonaisuudet</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Emme vain veistä kehikoita, vaan suunnittelemme toimivia kokonaisuuksia. Autamme ideoinnissa ja varmistamme, että lopputulos sopii ympäristöönsä täydellisesti.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
                        {/* Abstract/Placeholder background since no specific Hirrest images provided */}
                        <div className="absolute inset-0 bg-neutral-900">
                            <img
                                src="/hirrest/hirrest-services-bg.jpg"
                                alt="Hirsiveistoa"
                                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        </div>

                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                            <h4 className="text-white font-playfair font-bold text-lg mb-2">Perinne kohtaa nykyajan</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-semibold text-amber-500 bg-amber-950/30 px-3 py-1 rounded-full border border-amber-900/30">Käsityö</span>
                                <span className="text-xs font-semibold text-amber-500 bg-amber-950/30 px-3 py-1 rounded-full border border-amber-900/30">Ekologisuus</span>
                                <span className="text-xs font-semibold text-amber-500 bg-amber-950/30 px-3 py-1 rounded-full border border-amber-900/30">Kestävyys</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHirrest;
