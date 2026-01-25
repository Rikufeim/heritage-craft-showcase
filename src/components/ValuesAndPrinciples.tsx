
import React from 'react';

const ValueItem = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="py-4 space-y-4">
            <h4 className="font-playfair font-bold text-2xl text-white relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500/50 animate-[slideIn_0.6s_ease-out]"></span>
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">{description}</p>
        </div>
    );
};

const ValuesAndPrinciples = () => {
    const sodergardValues = [
        {
            title: "Kulttuuriperintöä vaalien",
            description: "Rakennuksia korjataan niiden aikakauden, materiaalien ja rakenteellisen logiikan ehdoilla."
        },
        {
            title: "Perinteiset materiaalit ja harmonia",
            description: "Työ on esteettistä, perusteltua ja rakennuksen luonnetta kunnioittavaa."
        },
        {
            title: "Käsityöläisyys ja ammattiylpeys",
            description: "Työ tehdään huolellisesti ja työmaa jätetään parempaan kuntoon kuin se oli."
        },
        {
            title: "Kierrätys ja vastuu",
            description: "Mahdollisimman paljon olemassa olevaa säilytetään ja hyödynnetään."
        },
        {
            title: "Avoimuus ja dokumentointi",
            description: "Työ dokumentoidaan ja asiakkaalle kerrotaan selkeästi, mitä rakenteille tehdään."
        },
        {
            title: "Täsmällisyys ja tiimityö",
            description: "Budjetti, aikataulu ja selkeä viestintä ovat yhteistyön perusta."
        }
    ];

    return (
        <section className="py-32 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto space-y-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    <div className="text-left space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-heading">Arvot ja periaatteet</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Kaikkea toimintaamme ohjaa rakennuskulttuuriperimän säilyttäminen, kädentaitojen vaaliminen ja tinkimätön laatu.
                            </p>
                        </div>

                        <div className="space-y-8 pt-4">
                            {sodergardValues.map((val, i) => (
                                <ValueItem key={i} {...val} />
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-neutral-800">
                        <img
                            src="/sodergard/town-hall.jpg"
                            alt="Vanha Raatihuone"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesAndPrinciples;
