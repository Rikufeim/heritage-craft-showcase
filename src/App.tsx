import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Introduction from './components/Introduction';
import ServicesSodergard from './components/ServicesSodergard';
import ValuesAndPrinciples from './components/ValuesAndPrinciples';
import ImageGalleryGrid from './components/ImageGalleryGrid';
import GradientButton from './components/ui/GradientButton';
import ReferenssitSection from './components/ReferenssitSection';

/**
 * FloatingDock - Navigation bar
 */
const FloatingDock = ({
  onNavigate
}: {
  onNavigate: (dest: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Etusivu', href: '#hero', action: () => onNavigate('home') },
    { name: 'Palvelut', href: '#services', action: () => document.getElementById('services-start')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: 'Referenssit', href: '#referenssit', action: () => document.getElementById('referenssit')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: 'Yhteystiedot', href: '#contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-site-bg/80 backdrop-blur-sm">
        <div className="flex items-center justify-end w-full max-w-7xl mx-auto">
          <div className="hidden md:flex items-center gap-6 p-2">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={e => { e.preventDefault(); link.action(); }}
                className="text-sm font-semibold text-gray-300 hover:text-heading transition-colors duration-200 px-4 py-1 uppercase tracking-wide cursor-pointer">
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-2">
              <a href="https://www.facebook.com/Restaurointisodergardoy/?locale=fi_FI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-heading transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://www.instagram.com/restaurointi_sodergard_oy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-heading transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>
          <button className="md:hidden text-gray-400 hover:text-heading" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-full mt-2 left-4 right-4 border border-neutral-700 rounded-xl p-4 flex flex-col gap-4 shadow-xl md:hidden bg-site-bg/90 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 z-50">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={e => {
                e.preventDefault();
                setIsOpen(false);
                link.action();
                if (link.href === '#hero') window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="text-gray-300 hover:text-heading font-bold py-3 px-4 hover:bg-white/5 rounded-lg transition-all border-b border-white/5 last:border-0">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

/**
 * Hero - Centered logo, slogan, minimal text
 */
const Hero = ({
  onNavigate
}: {
  onNavigate: (dest: string) => void;
}) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    setIsContentVisible(true);
  }, []);

  return (
    <div className="bg-site-bg w-full">
      <section id="hero" className="min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center bg-site-bg antialiased relative overflow-hidden w-full">
        <FloatingDock onNavigate={onNavigate} />

        {/* Video background */}
        <div className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-500 ease-out ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}>
          <video autoPlay loop muted playsInline preload="auto"
            onCanPlayThrough={() => setIsVideoReady(true)}
            onCanPlay={() => setIsVideoReady(true)}
            onLoadedData={() => setIsVideoReady(true)}
            onLoadedMetadata={() => setIsVideoReady(true)}
            className="w-full h-full object-cover"
            style={{ willChange: 'opacity' }}
          >
            <source src="/videos/hero-video.mov" type="video/mp4" />
            <source src="/videos/hero-video.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-site-bg/50 via-site-bg/30 to-site-bg pointer-events-none" />
          <div className="absolute inset-0 bg-site-bg/40 pointer-events-none" />
        </div>

        {/* Centered content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 space-y-4">
          <img
            src="/sodergard/logo-large.png"
            alt="Södergård Logo"
            className={`h-32 md:h-44 w-auto object-contain drop-shadow-2xl transition-all duration-700 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          />
          <p className={`text-sm md:text-base font-playfair text-gray-200 text-shadow-sm tracking-wider uppercase transition-all duration-700 delay-100 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Restaurointi Södergård Oy
          </p>
          <p className={`text-base md:text-lg text-gray-300 text-shadow-sm font-light max-w-md transition-all duration-700 delay-200 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Perinteitä kunnioittaen, tulevaisuutta rakentaen
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 items-center pt-4 transition-all duration-700 delay-300 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <GradientButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Ota yhteyttä
            </GradientButton>
            <a href="tel:+358449700432" className="flex items-center gap-2 text-gray-200 hover:text-heading transition-colors font-medium text-shadow-sm">
              <Phone size={18} />
              <span className="text-sm">+358 44 970 0432</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * FloatingContactButton
 */
const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 bg-site-bg border border-heading/60 rounded-xl p-3 shadow-2xl shadow-heading/10 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex flex-col gap-2">
            <a href="mailto:info@srgd.fi" className="flex items-center gap-2.5 text-gray-200 hover:text-heading transition-colors text-sm font-medium p-1.5 hover:bg-heading/10 rounded-lg">
              <Mail size={16} className="text-heading shrink-0" />
              info@srgd.fi
            </a>
            <a href="tel:+358449700432" className="flex items-center gap-2.5 text-gray-200 hover:text-heading transition-colors text-sm font-medium p-1.5 hover:bg-heading/10 rounded-lg">
              <Phone size={16} className="text-heading shrink-0" />
              +358 44 970 0432
            </a>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 bg-site-bg border-2 border-heading rounded-full flex items-center justify-center shadow-xl shadow-heading/20 hover:scale-110 transition-all duration-300 group">
        {isOpen ? <X size={24} className="text-heading" /> : <Mail size={24} className="text-heading" />}
      </button>
    </div>
  );
};

/**
 * ContactSection
 */
const ContactSection = () => {
  return (
    <section id="contact" className="relative py-16 md:py-24 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Company Info */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-black text-heading uppercase tracking-tight mb-6">
              Yhteystiedot
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-gray-400">Y-tunnus: 2569281-6</p>
              <div className="space-y-1">
                <p className="font-medium text-white">Ahlaistentie 648</p>
                <p>29700 Ahlainen</p>
              </div>
              <div className="pt-3 space-y-3">
                {/* Email first */}
                <a href="mailto:info@srgd.fi" className="flex items-center gap-2 text-heading hover:text-amber-300 transition-colors font-medium text-lg">
                  <Mail size={18} />
                  info@srgd.fi
                </a>
                <div>
                  <p className="font-bold text-white">Janne Aikonen <span className="font-normal text-gray-400">– Toimitusjohtaja</span></p>
                  <a href="tel:+358449700432" className="flex items-center gap-2 text-gray-300 hover:text-heading transition-colors font-medium">
                    <Phone size={16} />
                    +358 44 970 0432
                  </a>
                </div>
                <div>
                  <p className="font-bold text-white">Jukka Kukkonen <span className="font-normal text-gray-400">– Työnjohtaja</span></p>
                  <a href="tel:+358440473999" className="flex items-center gap-2 text-gray-300 hover:text-heading transition-colors font-medium">
                    <Phone size={16} />
                    +358 44 047 3999
                  </a>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-neutral-800/50">
              <iframe src="https://maps.google.com/maps?q=Ahlaistentie%20648,%2029700%20Ahlainen&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Restaurointi Södergård Oy sijainti" className="grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

          {/* Right - Billing Info */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-playfair font-black text-heading uppercase tracking-tight mb-6">
              Laskutustiedot
            </h3>
            <div className="space-y-4 text-base">
              <div className="border-b border-neutral-800/50 pb-3">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Yritys</p>
                <p className="text-white font-bold text-lg">Restaurointi Södergård Oy</p>
              </div>
              <div className="border-b border-neutral-800/50 pb-3">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Y-tunnus</p>
                <p className="text-white font-medium">2569281-6</p>
              </div>
              <div className="border-b border-neutral-800/50 pb-3">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Osoite</p>
                <div className="text-white font-medium">
                  <p>Ahlaistentie 648</p>
                  <p>29700 Ahlainen</p>
                </div>
              </div>
              <div className="border-b border-neutral-800/50 pb-3">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Verkkolaskuosoite</p>
                <p className="text-white font-medium">003725692816</p>
              </div>
              <div className="pb-3">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Operaattori</p>
                <p className="text-white font-medium">Apix Messaging Oy (003723327487)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Footer
 */
const Footer = () => {
  return (
    <div className="bg-site-bg w-full px-2 pb-2">
      <footer id="footer" className="relative py-10 px-6 overflow-hidden bg-site-bg-secondary rounded-[2rem] border border-neutral-800/40">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex justify-center gap-6 mb-3">
            <a href="https://www.facebook.com/Restaurointisodergardoy/?locale=fi_FI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-heading transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://www.instagram.com/restaurointi_sodergard_oy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-heading transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Restaurointi Södergård Oy. Kaikki oikeudet pidätetään.</p>
          <p className="text-gray-600 text-xs">
            <a href="https://feim.fi" target="_blank" rel="noopener noreferrer" className="hover:text-heading transition-colors">Ajattelevat sivut By Feim</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

/**
 * App - Main wrapper
 */
const App = () => {
  const [view, setView] = useState('home');

  const handleNavigate = (dest: string) => {
    if (dest === 'home' || dest === 'hero') {
      setView('home');
      window.scrollTo(0, 0);
    } else if (dest === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (dest === 'services') {
      document.getElementById('services-start')?.scrollIntoView({ behavior: 'smooth' });
    } else if (dest === 'referenssit') {
      document.getElementById('referenssit')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-site-bg min-h-screen font-sans antialiased selection:bg-amber-900 selection:text-white text-white">
      <FloatingContactButton />

      {view === 'home' && (
        <div className="flex flex-col">
          <Hero onNavigate={handleNavigate} />
          <Introduction />
          <div id="services-start">
            <ServicesSodergard />
          </div>
          <ReferenssitSection />
          <ValuesAndPrinciples />
          <ImageGalleryGrid />
          <ContactSection />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
