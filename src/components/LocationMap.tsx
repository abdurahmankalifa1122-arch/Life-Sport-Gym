import React from 'react';
import { MapPin, Phone, ExternalLink, Navigation, Clock, CheckCircle2, Copy } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#0B0D11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold tracking-[0.2em] uppercase font-heading bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">
            Find Our Facility
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight uppercase">
            LOCATION & <span className="text-amber-400">ACCESS</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Bole, Addis Ababa, Ethiopia. Easy access for morning, midday, or evening training sessions.
          </p>
        </div>

        {/* Two Column Layout: Info Card + Interactive Map Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-[#12151C] border border-neutral-800 shadow-2xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest font-heading block">
                  Official Location Details
                </span>
                <h3 className="text-2xl font-extrabold text-white font-heading uppercase mt-1">
                  {GYM_INFO.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {GYM_INFO.amharicSub}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Address Box */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase font-heading block">
                      Sub-City & Area
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {GYM_INFO.locationCity}, {GYM_INFO.country}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {GYM_INFO.addressPlaceholder}
                    </p>
                  </div>
                </div>

                {/* Phone Box */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase font-heading block">
                      Direct Front Desk Telephone
                    </span>
                    <a
                      href={`tel:${GYM_INFO.phoneRaw}`}
                      className="text-base font-extrabold text-amber-400 hover:text-amber-300 transition block mt-0.5 font-heading tracking-wide"
                    >
                      {GYM_INFO.phone}
                    </a>
                    <span className="text-xs text-neutral-400">
                      Tap to call directly from mobile
                    </span>
                  </div>
                </div>

                {/* Hours Box */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase font-heading block">
                      Operating Schedule
                    </span>
                    <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                      {GYM_INFO.hoursNotice}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-heading shadow-lg shadow-amber-500/20 transition"
              >
                <Navigation className="w-4 h-4 fill-black" />
                Open Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider font-heading border border-neutral-700 hover:border-amber-500 transition"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call Gym
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Frame & Visitor Guide */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#12151C] border border-neutral-800 overflow-hidden shadow-2xl p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
                  Bole, Addis Ababa Map Guide
                </span>
                <span className="text-[11px] text-neutral-400">
                  Ethiopia
                </span>
              </div>

              {/* Styled Map Container */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900 aspect-[16/9] mb-6 flex flex-col items-center justify-center p-6 text-center">
                {/* Background Map Visual */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-transparent to-black/60" />

                <div className="relative z-10 max-w-sm">
                  <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-amber-400 mx-auto mb-3 animate-bounce">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase font-heading">
                    Life Sport Gym — Bole
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    Addis Ababa, Ethiopia
                  </p>

                  <a
                    href={GYM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-amber-500 hover:bg-amber-400 text-black font-bold px-5 py-2.5 rounded-lg text-xs uppercase font-heading tracking-wider shadow-lg transition"
                  >
                    View on Google Maps Directions
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Visitor Preparation Checklist */}
              <div className="rounded-xl bg-neutral-900/90 border border-neutral-800 p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-white font-heading block mb-3">
                  First Time Visitor Checklist:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Clean training footwear & workout attire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Personal sweat towel & water bottle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>National ID / Registration details</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Payment in Ethiopian Birr (ETB)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-[11px] text-neutral-500 text-center">
              * Editable Map link. Update Google Maps URL directly in gymData.ts to match exact landmark coordinates.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
