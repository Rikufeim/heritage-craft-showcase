
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const ServiceItem = ({
    title,
    description,
    details
}: {
    title: string;
    description: string;
    details: string[];
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-8 border-b border-neutral-800 first:border-t hover:border-neutral-700 transition-colors duration-300">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:items-start text-left">
                <div className="space-y-2 max-w-2xl">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{description}</p>

                    <div className={`grid grid-rows-[0fr] ${isOpen ? 'grid-rows-[1fr]' : ''} transition-[grid-template-rows] duration-300`}>
                        <div className="overflow-hidden">
                            <ul className="pt-4 space-y-2">
                                {details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-2 text-base text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-heading mt-2 shrink-0" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 text-sm font-medium text-heading hover:text-white transition-colors uppercase tracking-widest shrink-0 pt-2"
                >
                    {isOpen ? 'Vähemmän' : 'Lue lisää'}
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            </div>
        </div>
    );
};

/* Reusing the Lightbox inline */
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

const ServicesSodergard = () => {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const services = [
        {
            title: "Hirsirakennusten nosto ja siirto",
            description: "Rakennusten turvallinen nosto ja siirto alkuperäistä rakennetta ja arvoa kunnioittaen.",
            details: [
                "Hallitut nostotyköt vankalla kokemuksella",
                "Ratkaisut räätälöidään aina kohteen ja käyttötarkoituksen mukaan",
                "Perustusten korjaus noston yhteydessä"
            ]
        },
        {
            title: "Hirren vaihto",
            description: "Lahonneiden tai vaurioituneiden hirsien huolellinen vaihto perinteitä kunnioittaen.",
            details: [
                "Perinteiset veistotekniikat",
                "Laadukkaat, valikoidut hirret",
                "Rakennuksen ryhdin palautus"
            ]
        },
        {
            title: "Sisustuskirvesmiehentyöt",
            description: "Listoitukset, paneelit ja puusepäntyöt rakennuksen alkuperäistä henkeä vaalien.",
            details: [
                "Aikakauden mukaiset listoitukset",
                "Erikoispuusepäntyöt",
                "Vanhan säilyttäminen ja uuden sovittaminen"
            ]
        },
        {
            title: "Luonnonkiviperustukset",
            description: "Uudet luonnonkiviperustukset ja vanhojen kivijalkojen korjaus perinteisin menetelmin.",
            details: [
                "Perinteinen ladonta ja kiilaus",
                "Kappaletavaran työstö paikan päällä",
                "Roudan ja kosteuden hallinta"
            ]
        },
        {
            title: "Rakenteet",
            description: "Vesikattojen, väli- ja alapohjien korjaus kestävillä ja toimivilla ratkaisuilla.",
            details: [
                "Hengittävät rakenneratkaisut",
                "Vaurioiden syiden selvitys ja korjaus",
                "Pitkäikäiset materiaalivalinnat"
            ]
        },
        {
            title: "Pintakäsittelyt",
            description: "Perinteiset pintakäsittelymenetelmät, jotka suojaavat ja kaunistavat rakennusta.",
            details: [
                "Punamultakeittomaalit",
                "Pellavaöljymaalaukset",
                "Kuultokäsittelyt ja vahat"
            ]
        },
        {
            title: "Savirappaus",
            description: "Luonnollinen ja hengittävä ratkaisu, joka parantaa sisäilmaa ja energiatehokkuutta.",
            details: [
                "Ekologinen pintamateriaali",
                "Tasaa ilmankosteutta ja lämpöä",
                "Elävä ja kaunis pinta"
            ]
        },
        {
            title: "Ikkunoiden ja ovien entisöinti",
            description: "Historiallisten ikkunoiden ja ovien kunnostus – ulkonäkö säilyy ja energiatehokkuus paranee.",
            details: [
                "Puitteiden ja karmien puukorjaukset",
                "Lasitukset ja kitaukset",
                "Helat ja lukot"
            ]
        }
    ];

    const galleryImages = [
        { src: '/palvelut/restaurointi-7.jpg', alt: "Kattotyö ja ullakkorakenteet" },
        { src: '/palvelut/restaurointi-8.jpg', alt: "Pilarien restaurointi telineissä" },
        { src: '/palvelut/restaurointi-9.jpg', alt: "Restaurointi ullakolla" },
        { src: '/palvelut/restaurointi-5.jpg', alt: "Perinteinen puutyö - hirsirakenne" },
        { src: '/palvelut/restaurointi-10.jpg', alt: "Hirsirakenteen yksityiskohta" },
        { src: '/palvelut/perinteet-1.jpg', alt: "Perinteinen rakennus" },
    ];

    return (
        <section className="py-32 px-6 bg-black">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                        Palvelut – <span className="text-heading">Restaurointi Södergård Oy</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Erikoisosaamistamme ovat vaativat restaurointityöt, joissa yhdistyvät perinteiset menetelmät, syvä materiaalituntemus ja tinkimätön laatu.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-96 md:h-[500px]">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-xl border border-neutral-800 cursor-pointer group h-full"
                            onClick={() => setLightboxImage(img.src)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>
                    ))}
                </div>

                {/* Service List - Text Only Layout */}
                <div className="max-w-4xl mx-auto w-full">
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>

            <SimpleLightbox
                src={lightboxImage}
                alt="Palvelukuva"
                onClose={() => setLightboxImage(null)}
            />
        </section>
    );
};

export default ServicesSodergard;
