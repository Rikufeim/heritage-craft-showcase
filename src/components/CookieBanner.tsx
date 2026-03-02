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
    <div className="fixed bottom-0 left-0 right-0 z-[60] animate-in slide-in-from-bottom duration-500">
      <div className="w-full bg-white border-t border-gray-200 px-6 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <svg className="w-5 h-5 text-gray-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <p className="text-sm text-gray-700">
              <span className="font-bold text-gray-900">Käytämme evästeitä</span>
              {' — '}
              Käytämme evästeitä parantaaksemme käyttökokemustasi ja analysoidaksemme sivuston käyttöä. Voit hyväksyä tai hylätä evästeet.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="text-sm text-gray-700 border border-gray-300 rounded-lg px-5 py-2 hover:bg-gray-100 transition-colors font-medium"
            >
              Hylkää
            </button>
            <button
              onClick={accept}
              className="text-sm font-semibold bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Hyväksy evästeet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
