
import React from 'react';

const WhyChooseSodergard = () => {
    const points = [
        {
            title: "Laatu",
            text: "Laatu on yksi perusarvoistamme. Käytämme vain parhaita materiaaleja ja perinteisiä menetelmiä, joilla varmistetaan kestävä lopputulos."
        },
        {
            title: "Restaurointi",
            text: "Olemme erikoistuneet puurakennuksien ja perinteisten kohteiden restaurointiin ja entisöintiin. Kunnioitamme alkuperäisiä materiaaleja ja työtapoja."
        },
        {
            title: "Korjaukset",
            text: "Korjausrakentamisessa erikoisosaamistamme ovat haastavat kohteet, kuten hirsirakennusten nosto ja siirto sekä rakenteiden vahvistus."
        }
    ];

    return (
        <section className="py-24 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto space-y-12">
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-center text-heading mb-16">
                    Miksi valita Södergård?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {points.map((point, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-2xl font-playfair font-bold text-white relative inline-block">
                                {point.title}
                                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500/50 hidden md:block"></span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {point.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSodergard;
