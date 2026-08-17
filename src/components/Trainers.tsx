import React from 'react';
import { Dumbbell, Award, Shield, CheckCircle, Phone, Info } from 'lucide-react';
import { TRAINERS, GYM_INFO } from '../data/gymData';
import { SafeImage } from './SafeImage';

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[#0B0D11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold tracking-[0.2em] uppercase font-heading bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">
            Coaching & Instruction
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight uppercase">
            TRAINERS & <span className="text-amber-400">INSTRUCTORS</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Professional strength coaching and training guidance. Inquire directly with the Bole front desk to schedule one-on-one sessions with our certified male trainers.
          </p>
        </div>

        {/* 3 Trainer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-2xl bg-[#12151C] border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col group shadow-xl"
            >
              {/* Equipment & Strength Focus Visual (Strictly Equipment / Iron Focus) */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                <SafeImage
                  src={trainer.imageUrl}
                  alt={`${trainer.title} at Life Sport Gym Bole`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackTitle={trainer.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-[#12151C]/40 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-900/90 backdrop-blur-md border border-neutral-700 text-[10px] font-bold text-amber-400 uppercase tracking-wider font-heading">
                    Strength Coach
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider font-heading block">
                    {trainer.role}
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading uppercase mt-1 mb-2">
                    {trainer.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-medium mb-4">
                    {trainer.specialty}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-heading block">
                      Key Focus Areas:
                    </span>
                    {trainer.focusAreas.map((area, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-400 mb-4">
                    {trainer.isPlaceholderNote}
                  </div>

                  <a
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-amber-500 hover:text-black text-amber-400 border border-neutral-700 hover:border-amber-500 text-xs font-bold uppercase tracking-wider font-heading flex items-center justify-center gap-2 transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Inquire for Coaching
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 max-w-2xl mx-auto flex items-center gap-3 text-xs text-neutral-400">
          <Info className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <p>
            * Trainer assignments and coaching schedules are arranged directly through the front desk at <strong className="text-neutral-200">Life Sport Gym, Bole</strong>. Call <a href={`tel:${GYM_INFO.phoneRaw}`} className="text-amber-400 hover:underline">{GYM_INFO.phone}</a> to match with an available coach.
          </p>
        </div>
      </div>
    </section>
  );
};
