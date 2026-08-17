import React from 'react';
import { Trophy, MapPin, Activity, CheckCircle, Users, Headphones, Shield, Dumbbell } from 'lucide-react';
import { WHY_CHOOSE_US, GYM_INFO } from '../data/gymData';

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  MapPin,
  Activity,
  CheckCircle,
  Users,
  Headphones,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0B0D11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold tracking-[0.2em] uppercase font-heading bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">
            Why Train Here
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight uppercase">
            WHY CHOOSE <span className="text-amber-400">LIFE SPORT GYM</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Built from the ground up to provide serious lifters in Bole with the equipment, atmosphere, and discipline needed to achieve measurable fitness gains.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((benefit) => {
            const Icon = iconMap[benefit.iconName] || Dumbbell;
            return (
              <div
                key={benefit.id}
                className="p-8 rounded-2xl bg-[#12151C] border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest font-heading block mb-1">
                    {benefit.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading uppercase mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-2 text-[11px] text-neutral-400 font-heading uppercase">
                  <Shield className="w-3.5 h-3.5 text-amber-500" />
                  <span>Life Sport Standard • Bole</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Community Highlight Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-[#141822] to-neutral-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase font-heading">
                Ready to Experience Life Sport Gym in Bole?
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Visit our facility or call for current membership registration details.
              </p>
            </div>
          </div>

          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-heading shadow-lg shadow-amber-500/20 transition"
          >
            Call +251 11 629 9953
          </a>
        </div>
      </div>
    </section>
  );
};
