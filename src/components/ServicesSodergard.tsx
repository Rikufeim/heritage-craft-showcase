import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ServiceItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-5 border-b border-neutral-800/60 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex w-full items-center justify-between text-left group"
      >
        <h3 className="text-xl font-playfair font-bold text-white group-hover:text-heading transition-colors">
          {title}
        </h3>
        <ChevronDown
          size={20}
          className={`text-gray-500 group-hover:text-heading transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {/* Mobile: just name */}
      <h3 className="md:hidden text-lg font-playfair font-bold text-white">{title}</h3>
      {/* Desktop: expandable description */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const ServicesSodergard = () => {
  const services = [
    {
      title: "Hirsirakennusten nosto ja siirto",
      description: "Rakennusten turvallinen nosto ja siirto alkuperäistä rakennetta ja arvoa kunnioittaen."
    },
    {
      title: "Hirren vaihto",
      description: "Lahonneiden tai vaurioituneiden hirsien huolellinen vaihto perinteitä kunnioittaen."
    },
    {
      title: "Sisustuskirvesmiehentyöt",
      description: "Listoitukset, paneelit ja puusepäntyöt rakennuksen alkuperäistä henkeä vaalien."
    },
    {
      title: "Luonnonkiviperustukset",
      description: "Uudet luonnonkiviperustukset ja vanhojen kivijalkojen korjaus perinteisin menetelmin."
    },
    {
      title: "Rakenteet",
      description: "Vesikattojen, väli- ja alapohjien korjaus kestävillä ja toimivilla ratkaisuilla."
    },
    {
      title: "Pintakäsittelyt",
      description: "Perinteiset pintakäsittelymenetelmät, jotka suojaavat ja kaunistavat rakennusta."
    },
    {
      title: "Savirappaus",
      description: "Luonnollinen ja hengittävä ratkaisu, joka parantaa sisäilmaa ja energiatehokkuutta."
    },
    {
      title: "Ikkunoiden ja ovien entisöinti",
      description: "Historiallisten ikkunoiden ja ovien kunnostus – ulkonäkö säilyy ja energiatehokkuus paranee."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-site-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-heading mb-10 text-center">
          Palvelut
        </h2>
        <div>
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSodergard;
