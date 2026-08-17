import React from 'react';
import { Quote, UserCheck, ShieldAlert, Dumbbell } from 'lucide-react';
import { TESTIMONIALS, GYM_INFO } from '../data/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0D1017] border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold tracking-[0.2em] uppercase font-heading bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">
            Member Impressions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight uppercase">
            MEMBER <span className="text-amber-400">FEEDBACK & CULTURE</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            What lifters value most at Life Sport Gym: the heavy equipment, focused environment, and consistent motivation in Bole.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#12151C] border border-neutral-800 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-bold text-amber-500 uppercase tracking-widest font-heading">
                    {item.memberSince}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-amber-400 font-bold text-xs font-heading">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-heading">
                    {item.author}
                  </h4>
                  <span className="text-[11px] text-neutral-400">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editable Testimonial Placeholder Notice */}
        <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 max-w-xl mx-auto text-center text-xs text-neutral-400">
          <p>
            📝 <strong>Gym Management Note:</strong> Testimonial cards above are editable placeholders ready for verified member reviews from the Bole front desk.
          </p>
        </div>
      </div>
    </section>
  );
};
