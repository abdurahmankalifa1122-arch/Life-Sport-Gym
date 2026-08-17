import React from 'react';
import { Dumbbell, Phone, MapPin, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#080A0E] text-neutral-400 border-t border-neutral-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-3 group mb-4">
              <div className="relative h-12 w-12 flex items-center justify-center shrink-0">
                <img
                  src={GYM_INFO.logoUrl}
                  alt="Life Sport Gym Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                  <Dumbbell className="w-6 h-6 text-black stroke-[2.5]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-white font-brand leading-none">
                  LIFE SPORT <span className="text-amber-400">GYM</span>
                </span>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-heading font-medium mt-1">
                  Bole • Addis Ababa, Ethiopia
                </span>
              </div>
            </a>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-6">
              A premier strength and conditioning gym located in Bole, Addis Ababa. Dedicated to heavy progressive lifting, disciplined athletics, and personal transformation.
            </p>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Bole Front Desk Registration • ETB Pricing</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-heading mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors uppercase font-heading tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-heading mb-4">
                Location & Phone
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-neutral-200">Life Sport Gym</strong>
                    <br />
                    Bole, Addis Ababa, Ethiopia
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="text-amber-400 font-bold hover:text-amber-300 transition"
                  >
                    {GYM_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/80">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-bold text-neutral-300 hover:text-amber-400 uppercase font-heading transition"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Life Sport Gym (Bole, Addis Ababa, Ethiopia). All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              GitHub Pages Ready • Static SPA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
