import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, Dumbbell, Flame, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 pb-16 lg:py-24">
      {/* Background Graphic Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[#0B0D11] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Brand Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-xs font-semibold text-amber-400 mb-6 backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="tracking-widest uppercase font-heading">BOLE • ADDIS ABABA, ETHIOPIA</span>
            </div>

            {/* Gym Name Sub-Header */}
            <div className="mb-2">
              <span className="text-amber-500 tracking-[0.25em] text-xs sm:text-sm font-bold uppercase font-heading block">
                {GYM_INFO.name}
              </span>
              <p className="text-neutral-500 text-xs tracking-wider uppercase font-medium">
                {GYM_INFO.amharicSub}
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-heading leading-[1.05] uppercase mb-6">
              BUILD A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                STRONGER LIFE.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Welcome to <strong className="text-white font-semibold">Life Sport Gym</strong> in Bole, Addis Ababa.
              A purpose-built strength and fitness facility dedicated to iron discipline, continuous physical progression, heavy compound lifting, and a professional training environment.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#membership"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold px-8 py-4 rounded-xl text-sm tracking-wider uppercase font-heading shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                View Membership
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-neutral-800 text-white hover:text-amber-400 font-bold px-7 py-4 rounded-xl text-sm tracking-wider uppercase font-heading border border-neutral-700 hover:border-amber-500/40 transition-all shadow-lg"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Contact Life Sport Gym
              </a>
            </div>

            {/* Trust Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-800/80 w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-neutral-200 uppercase font-heading">Heavy Free Weights</span>
                  <span className="text-[11px] text-neutral-400">Barbells & Dumbbells</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-neutral-200 uppercase font-heading">Pure Discipline</span>
                  <span className="text-[11px] text-neutral-400">Distraction-Free</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-neutral-200 uppercase font-heading">Bole Location</span>
                  <span className="text-[11px] text-neutral-400">Addis Ababa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (100% Strictly Equipment / Gym Interior) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Border Effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-amber-600/10 rounded-2xl blur-lg opacity-75" />

              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 bg-[#12151C] shadow-2xl aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
                <SafeImage
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
                  alt="Life Sport Gym Male Athlete Heavy Barbell Strength Training in Bole Addis Ababa"
                  className="w-full h-full object-cover"
                  fallbackTitle="Olympic Lifting & Heavy Equipment"
                  loading="eager"
                />

                {/* Gradient Overlays for High Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-transparent to-black/30" />

                {/* Top Badge with Official Logo */}
                <div className="absolute top-4 left-4 p-2 rounded-xl bg-[#0B0D11]/90 backdrop-blur-md border border-amber-500/30 flex items-center gap-2.5 shadow-xl">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0">
                    <img
                      src={GYM_INFO.logoUrl}
                      alt="Life Sport Gym Emblem"
                      className="w-full h-full object-contain filter drop-shadow"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block font-heading">
                      Life Sport Gym
                    </span>
                    <span className="text-[9px] text-neutral-400 uppercase tracking-widest block font-heading">
                      Bole • Addis Ababa
                    </span>
                  </div>
                </div>

                {/* Floating Info Overlay Pill at Bottom */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#0B0D11]/90 backdrop-blur-md border border-neutral-700/80 flex items-center justify-between shadow-2xl">
                  <div>
                    <span className="text-xs font-bold text-white uppercase font-heading tracking-wider block">
                      Strength & Conditioning Floor
                    </span>
                    <span className="text-[11px] text-amber-400 font-medium flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-amber-400" />
                      Commercial Grade Iron
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest block font-heading">
                      Facility
                    </span>
                    <span className="text-xs font-bold text-white">Bole, Addis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
