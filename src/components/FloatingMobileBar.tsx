import React from 'react';
import { Phone, Navigation, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const FloatingMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0B0D11]/95 backdrop-blur-lg border-t border-neutral-800 p-3 sm:hidden shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${GYM_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 text-black font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-heading shadow-lg shadow-amber-500/20"
        >
          <Phone className="w-4 h-4 fill-black" />
          Call +251 11 629 9953
        </a>

        <a
          href={GYM_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-amber-400 active:bg-neutral-800"
          title="Open Google Maps in Bole"
          aria-label="Open Google Maps in Bole"
        >
          <Navigation className="w-4 h-4 fill-amber-400" />
        </a>
      </div>
    </div>
  );
};
