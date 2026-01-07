import React, { useState, useEffect, useRef } from 'react';
import SodergardWhyParallax from './components/SodergardWhyParallax';
import LaatuSection from './components/LaatuSection';
import RestaurointiSection from './components/RestaurointiSection';
import KorjauksetSection from './components/KorjauksetSection';
import { Menu, X, ArrowRight, ArrowLeft, Phone, Mail, MapPin, CheckCircle2, Hammer, Ruler, Shield, Paintbrush } from 'lucide-react';

// NOTE: Images below are placeholders. In a real project you would replace these
// imports with your own assets or remote URLs that reflect the company's
// restoration work and brand. These unsplash IDs were selected to evoke
// traditional Finnish wooden architecture and craftsmanship.
const heroBanner = 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1000&q=80';
const ref1 = 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=600&q=80';
const ref2 = 'https://images.unsplash.com/photo-1455287278107-763a0c633772?auto=format&fit=crop&w=600&q=80';
const ref3 = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80';
const ref4 = 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=600&q=80';

/**
 * GradientButton
 * A button component styled for a luxurious black and gold palette.
 */
const GradientButton = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return <button className={`relative group inline-flex items-center justify-center rounded-full min-w-[120px] px-6 py-2.5 text-sm leading-[18px] font-[600] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden ${className}`} {...props}>
      {/* Base Layer: Shiny black background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 via-black to-neutral-900 rounded-full z-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.5)]" />
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-10" />
      {/* Border */}
      <div className="absolute inset-0 rounded-full border border-neutral-600 group-hover:border-neutral-500 transition-colors duration-300 z-10" />
      <span className="relative z-20 flex items-center gap-2 text-white">{children}</span>
    </button>;
};

/**
 * FloatingDock
 * Responsive navigation bar for the site. Uses black/gold palette.
 */
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
    href: '#references',
    action: () => onNavigate('home')
  }, {
    name: 'Yhteystiedot',
    href: '#contact',
    action: () => onNavigate('home')
  }];
  return <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div onClick={() => onNavigate('home')} className="cursor-pointer select-none">
          <span className="text-2xl font-bold text-amber-500">Södergård</span>
        </div>
        <div className="hidden md:flex items-center gap-6 p-2">
          {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
          if (link.href === '#hero') {
            e.preventDefault();
            link.action();
          }
        }} className="text-sm font-semibold text-gray-300 hover:text-amber-400 transition-colors duration-200 px-4 py-1 uppercase tracking-wide">
              {link.name}
            </a>)}
        </div>
        <button className="md:hidden text-gray-300 hover:text-amber-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && <div className="absolute top-full mt-2 left-0 right-0 mx-4 border border-neutral-700 rounded-xl p-4 flex flex-col gap-4 shadow-xl md:hidden bg-black/80 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 z-50">
          {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => {
        setIsOpen(false);
        link.action();
      }} className="text-gray-300 hover:text-amber-400 font-bold py-3 px-4 hover:bg-white/5 rounded-lg transition-all border-b border-white/5 last:border-0">
              {link.name}
            </a>)}
        </div>}
    </nav>;
};

/**
 * Hero
 * The introductory hero section for the landing page.
 */
const Hero = ({
  onNavigate
}: {
  onNavigate: (dest: string) => void;
}) => {
  return <div className="bg-black w-full pb-12">
      <section id="hero" className="min-h-[40rem] rounded-b-[2.5rem] flex flex-col items-start justify-start bg-black antialiased relative overflow-hidden border-b border-neutral-800 shadow-2xl w-full">
        <FloatingDock onNavigate={onNavigate} />
        
        {/* Full-width video background */}
        <div className="absolute top-20 left-0 right-0 bottom-0 z-0 rounded-t-[2rem] overflow-hidden mx-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/hero-video.mov" type="video/quicktime" />
            <source src="/videos/hero-video.mov" type="video/mp4" />
          </video>
          {/* Multi-layer fade for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Golden glow effect at top-left corner - reduced */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" style={{
        background: 'radial-gradient(circle at 5% 10%, rgba(245, 158, 11, 0.15), transparent 20%)'
      }}></div>
        {/* Spotlight effect - reduced */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" style={{
        background: 'radial-gradient(ellipse at 40% 30%, rgba(255, 215, 128, 0.08), transparent 50%)'
      }}></div>
        {/* Bottom fade - stronger */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
        
        <div className="p-6 max-w-7xl mx-auto relative z-20 w-full pt-48 md:pt-56 flex flex-col items-start justify-start">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Laadukasta<br />
            rakennuskannan<br />
            entisöintiä
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            Kunnioitamme menneisyyttä ja rakennamme kestävää tulevaisuutta säilyttämällä Suomen rikasta rakennusperintöä.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mt-6">
            <GradientButton onClick={() => onNavigate('contact')}>
              Ota yhteyttä
              <ArrowRight size={20} />
            </GradientButton>
            <div className="flex items-center gap-2 px-6 py-4 text-white font-medium">
              <CheckCircle2 className="text-amber-500" size={20} />
              <span>Perinteinen osaaminen</span>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

/**
 * ServiceRow
 * Displays a single service with alternating image/text layout.
 */
const ServiceRow = ({
  title,
  description,
  icon: Icon,
  index,
  ctaText
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{
    size?: number | string;
    className?: string;
  }>;
  index: number;
  ctaText: string;
}) => {
  return <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 w-full max-w-7xl mx-auto px-6 md:px-12`}>
      <div className="flex-1 space-y-6 text-left">
        
        <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
        <div className="pt-4">
          <GradientButton>{ctaText}</GradientButton>
        </div>
      </div>
      <div className="flex-1 w-full h-64 md:h-96">
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-700 shadow-xl bg-neutral-900">
          {/* Use dynamic unsplash images that evoke restoration */}
          <img src={`https://images.unsplash.com/photo-${getRestorationPhotoId(index)}?q=80&w=1000&auto=format&fit=crop`} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100" />
        </div>
      </div>
    </div>;
};
const getRestorationPhotoId = (i: number) => {
  const ids = ['1506976785307-8732e854ad35',
  // traditional wooden house
  '1529692236671-f1bc237f7274',
  // old log house wall
  '1559139543-646f9f9e24a0',
  // carpentry tools
  '1505842465776-3d99d35aef68' // stone foundation
  ];
  return ids[i % ids.length];
};

/**
 * ServicesList
 * Lists the core values/services offered by the company.
 */
const ServicesList = () => {
  const services = [{
    title: 'Perinteet',
    icon: Shield,
    desc: 'Kunnioitamme perinteitä käyttämällä tekniikoita ja materiaaleja, jotka säilyttävät vanhojen rakennusten hengen modernin työkalun avulla.',
    cta: 'Lue tarinamme'
  }];
  return <section id="services" className="relative py-24 overflow-hidden bg-black w-full">
      <div className="absolute inset-0 z-0" style={{
      background: 'radial-gradient(circle at 30% 70%, #0a0a0a 0%, transparent 45%), radial-gradient(circle at 70% 30%, #111 0%, transparent 45%)',
      width: '100%',
      height: '100%'
    }} />
      <div className="space-y-32 relative z-10">
        {/* Laatu section with 2x2 grid */}
        <LaatuSection />
        {/* Restaurointi section with images */}
        <RestaurointiSection />
        {/* Korjaukset section with images */}
        <KorjauksetSection />
        {services.map((s, i) => <ServiceRow key={i} index={i + 1} title={s.title} icon={s.icon} description={s.desc} ctaText={s.cta} />)}
      </div>
    </section>;
};

/**
 * References
 * Showcases example restoration projects. Clicking on an image opens a larger view.
 */
const References = () => {
  const referenceImages = [ref1, ref2, ref3, ref4];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return <>
      <section id="references" className="relative overflow-hidden">
        {/* Background with overlay */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <img src={heroBanner} alt="Referenssit tausta" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-black text-amber-500 uppercase tracking-wider drop-shadow-lg">
              Referenssit
            </h2>
          </div>
        </div>
        {/* Grid of images */}
        <div className="bg-black py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {referenceImages.map((img, index) => <div key={index} onClick={() => setSelectedImage(img)} className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer">
                <img src={img} alt={`Referenssi ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>)}
          </div>
        </div>
      </section>
      {selectedImage && <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-50">
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Referenssi suurennos" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-90 duration-300" onClick={e => e.stopPropagation()} />
        </div>}
    </>;
};

/**
 * FloatingContactButton
 * Floating phone button that shows contact options.
 */
const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="fixed bottom-6 right-6 z-50">
      {/* Contact popup */}
      {isOpen && <div className="absolute bottom-16 right-0 mb-2 bg-black border-2 border-amber-600 rounded-2xl p-4 shadow-2xl shadow-amber-900/30 min-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="space-y-3">
            <a href="tel:+358449700432" className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors font-medium p-2 hover:bg-amber-900/20 rounded-lg">
              <Phone size={20} className="text-amber-500" />
              <span>+358 44 970 0432</span>
            </a>
            <a href="mailto:info@srgd.fi" className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors font-medium p-2 hover:bg-amber-900/20 rounded-lg">
              <Mail size={20} className="text-amber-500" />
              <span>info@srgd.fi</span>
            </a>
          </div>
        </div>}
      
      {/* Phone button */}
      <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 bg-black border-2 border-amber-600 rounded-full flex items-center justify-center shadow-xl shadow-amber-900/30 hover:scale-110 hover:border-amber-500 transition-all duration-300 group">
        {isOpen ? <X size={24} className="text-amber-500 group-hover:text-amber-400" /> : <Phone size={24} className="text-amber-500 group-hover:text-amber-400" />}
      </button>
    </div>;
};

/**
 * ContactSection
 * Displays company and billing information.
 */
const ContactSection = () => {
  return <section id="contact" className="relative py-24 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Company Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-amber-500 uppercase tracking-tight mb-8">
                Restaurointi Södergård Oy
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-gray-400">Y-tunnus: 2569281-6</p>
                <div className="space-y-1">
                  <p className="font-medium text-white">Ahlaistentie 648</p>
                  <p>29700 Ahlainen</p>
                </div>
                <div className="pt-4 space-y-2">
                  <p className="font-bold text-white">Janne & Jukka</p>
                  <a href="tel:+358449700432" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium">
                    <Phone size={18} />
                    +358 44 970 0432
                  </a>
                  <a href="mailto:info@srgd.fi" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium">
                    <Mail size={18} />
                    info@srgd.fi
                  </a>
                </div>
              </div>
            </div>
            {/* Embedded map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-700">
              <iframe src="https://maps.google.com/maps?q=Ahlaistentie%20648,%2029700%20Ahlainen&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="250" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Restaurointi Södergård Oy sijainti" className="grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
          {/* Right - Billing Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-amber-500 mb-6">Laskutustiedot</h3>
            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Yritys</p>
                  <p className="text-white font-bold text-lg">Restaurointi Södergård Oy</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Y-tunnus</p>
                  <p className="text-white font-medium">2569281-6</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Osoite</p>
                  <p className="text-white font-medium">Ahlaistentie 648</p>
                  <p className="text-white font-medium">29700 Ahlainen</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Verkkolaskuosoite</p>
                  <p className="text-white font-medium">003725692816</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Operaattori</p>
                  <p className="text-white font-medium">Apix Messaging Oy (003723327487)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

/**
 * Footer
 * Concluding section of the page.
 */
const Footer = () => {
  return <div className="bg-black w-full px-2 pb-2">
      <footer id="footer" className="relative py-12 px-6 overflow-hidden bg-black rounded-[2.5rem] border border-neutral-800">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
            <p>&copy; {new Date().getFullYear()} Restaurointi Södergård Oy. Kaikki oikeudet pidätetään.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Tietosuoja</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Toimitusehdot</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

/**
 * App
 * Main wrapper component for the landing page.
 */
const App = () => {
  const [view, setView] = useState('home');
  const handleNavigateHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };
  return <div className="bg-black min-h-screen font-sans antialiased selection:bg-amber-900 selection:text-black text-white">
      <FloatingContactButton />
      {view === 'home' ? <div className="flex flex-col">
          <Hero onNavigate={dest => {
        if (dest === 'contact') {
          document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          });
        } else {
          handleNavigateHome();
        }
      }} />
          <SodergardWhyParallax />
          <ServicesList />
          <References />
          <ContactSection />
          <Footer />
        </div> : null}
    </div>;
};
export default App;