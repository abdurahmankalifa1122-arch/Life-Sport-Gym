import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Dumbbell, MapPin, ChevronRight, Check } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(GYM_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#121620] border-b border-neutral-800/80 text-xs py-2 px-4 text-neutral-300 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20 text-[11px]">
              <MapPin className="w-3 h-3" />
              BOLE • ADDIS ABABA
            </span>
            <span className="hidden md:inline text-neutral-400">
              {GYM_INFO.amharicWelcome} • Premium Strength & Fitness
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-neutral-400 hidden lg:inline">Questions & Inquiries:</span>
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              {GYM_INFO.phone}
            </a>
            <button
              onClick={handleCopyPhone}
              className="text-[11px] text-neutral-400 hover:text-white bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700 transition flex items-center gap-1"
              title="Copy phone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                'Copy'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D11]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3.5'
            : 'bg-[#0B0D11]/80 backdrop-blur-sm border-b border-neutral-800/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shrink-0 rounded-xl bg-neutral-950/80 p-1 border border-amber-500/20 shadow-lg shadow-amber-500/5 group-hover:border-amber-500/50 group-hover:shadow-amber-500/20">
              <img
                src={GYM_INFO.logoUrl}
                alt="Life Sport Gym Logo"
                className="w-full h-full object-contain filter drop-shadow-md rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-10 h-10 items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg">
                <Dumbbell className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-bold tracking-wider text-white font-brand leading-none group-hover:text-amber-300 transition-colors">
                LIFE SPORT <span className="text-amber-400">GYM</span>
              </span>
              <span className="text-[11px] tracking-widest text-neutral-400 uppercase font-heading font-medium mt-1">
                Bole • Addis Ababa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors uppercase tracking-wide font-heading"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-heading shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 fill-black" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-amber-400 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-[#0B0D11]/98 backdrop-blur-xl border-b border-neutral-800 p-6 shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80 text-neutral-200 hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400 transition font-heading font-medium tracking-wide uppercase text-sm"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}

              <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 rounded-lg text-sm tracking-wider uppercase font-heading shadow-lg shadow-amber-500/20"
                >
                  <Phone className="w-4 h-4 fill-black" />
                  Call {GYM_INFO.phone}
                </a>

                <div className="p-3 bg-neutral-900 rounded-lg text-center text-xs text-neutral-400 border border-neutral-800">
                  <p className="font-semibold text-neutral-200">Life Sport Gym • Bole</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
