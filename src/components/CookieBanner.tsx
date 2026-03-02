import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-site-bg border border-neutral-700/60 rounded-xl p-4 md:p-5 shadow-2xl backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 text-sm text-gray-300 leading-relaxed">
            <span className="font-medium text-white">Evästeet 🍪</span>{' '}
            Käytämme evästeitä parantaaksemme käyttökokemustasi sivuillamme.
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5"
            >
              Hylkää
            </button>
            <button
              onClick={accept}
              className="text-sm font-semibold bg-heading text-site-bg px-5 py-2 rounded-lg hover:bg-heading/90 transition-colors"
            >
              Hyväksy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
