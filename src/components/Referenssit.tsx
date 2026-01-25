import React, { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

interface ReferenssitProps {
  onNavigate: (dest: string) => void;
}

const FloatingDock = ({
  onNavigate
}: {
  onNavigate: (dest: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: 'Etusivu',
    href: '#hero',
    action: () => onNavigate('home')
  }, {
    name: 'Palvelut',
    href: '#services',
    action: () => onNavigate('home')
  }, {
    name: 'Referenssit',
    href: '#referenssit',
    action: () => onNavigate('referenssit')
  }, {
    name: 'Yhteystiedot',
    href: '#contact',
    action: () => onNavigate('home')
  }];
  
  return (
    <>
      {/* Navigation bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-end w-full max-w-7xl mx-auto">
          <div className="hidden md:flex items-center gap-6 p-2">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={e => {
                  e.preventDefault();
                  link.action();
                }} 
                className="text-sm font-semibold text-gray-300 hover:text-amber-400 transition-colors duration-200 px-4 py-1 uppercase tracking-wide cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-4 ml-2">
              <a href="https://www.facebook.com/Restaurointisodergardoy/?locale=fi_FI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://www.instagram.com/restaurointi_sodergard_oy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>
          <button className="md:hidden text-gray-400 hover:text-amber-500" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-full mt-2 left-4 right-4 border border-neutral-700 rounded-xl p-4 flex flex-col gap-4 shadow-xl md:hidden bg-black/80 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 z-50">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={e => {
                  e.preventDefault();
                  setIsOpen(false);
                  link.action();
                }} 
                className="text-gray-300 hover:text-amber-400 font-bold py-3 px-4 hover:bg-white/5 rounded-lg transition-all border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      
      {/* Overlapping Logo */}
      <div 
        onClick={() => onNavigate('home')} 
        className="absolute left-6 md:left-12 top-8 z-50 cursor-pointer select-none"
      >
        <img 
          src="/sodergard/logo-large.png" 
          alt="Södergård Logo" 
          className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl" 
        />
      </div>
    </>
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

const Referenssit: React.FC<ReferenssitProps> = ({ onNavigate }) => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end justify-start overflow-hidden">
        <FloatingDock onNavigate={onNavigate} />
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/sodergard/town-hall.jpg" 
            alt="Referenssit Hero" 
            className="w-full h-full object-cover"
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto w-full pb-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-heading leading-tight">
            Referenssit
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
            Tutustu toteuttamiimme restaurointi- ja korjauskohteisiin.
          </p>
        </div>
      </section>

      {/* References Listing Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-heading mb-4">
              Toteutetut kohteet
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Olemme toteuttaneet lukuisia restaurointi- ja korjaushankkeita ympäri Suomea.
            </p>
          </div>

          {/* Reference Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {referenceItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-heading/50 transition-all duration-500"
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
      </section>

      {/* Back to Home Button */}
      <div className="py-12 px-6 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <button 
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-heading hover:text-white transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Takaisin etusivulle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Referenssit;
