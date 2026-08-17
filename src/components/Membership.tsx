import React, { useState } from 'react';
import { Check, Phone, ArrowRight, ShieldCheck, Tag, Info, HelpCircle } from 'lucide-react';
import { MEMBERSHIPS, GYM_INFO } from '../data/gymData';

interface MembershipProps {
  onSelectPlan?: (planName: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  const [selectedGoal, setSelectedGoal] = useState('Muscle Building & Strength');
  const [selectedFrequency, setSelectedFrequency] = useState('3-4 Days / Week');

  const goals = [
    'Muscle Building & Strength',
    'Fat Loss & Conditioning',
    'General Athletic Fitness',
    'Heavy Powerlifting',
  ];

  const frequencies = [
    '2-3 Days / Week',
    '3-4 Days / Week',
    '5-6 Days / Week (Dedicated)',
  ];

  return (
    <section id="membership" className="py-20 lg:py-28 bg-[#0D1017] border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold tracking-[0.2em] uppercase font-heading bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">
            Membership Options
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight uppercase">
            CHOOSE YOUR <span className="text-amber-400">COMMITMENT</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            All memberships are processed and registered directly at our front desk in <strong className="text-neutral-200">Bole, Addis Ababa</strong> in Ethiopian Birr (ETB).
          </p>
        </div>

        {/* 4 Membership Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {MEMBERSHIPS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-[#141822] border-2 border-amber-500/80 shadow-2xl shadow-amber-500/10 scale-[1.02] z-10'
                  : 'bg-[#12151C] border border-neutral-800 hover:border-neutral-700 shadow-xl'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest font-heading shadow-md ${
                      plan.isPopular
                        ? 'bg-amber-500 text-black'
                        : 'bg-neutral-800 text-amber-400 border border-neutral-700'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="text-center pt-2 pb-5 border-b border-neutral-800">
                  <h3 className="text-lg font-bold text-white font-heading uppercase">
                    {plan.name}
                  </h3>
                  <span className="text-xs text-neutral-400 font-medium block mt-0.5">
                    {plan.duration}
                  </span>

                  {/* Price Box */}
                  <div className="mt-4 p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                    <span className="text-sm sm:text-base font-extrabold text-amber-400 font-heading block">
                      {plan.priceNote}
                    </span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mt-0.5">
                      Bole Front-Desk Pricing
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 mt-4 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 my-6">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider font-heading flex items-center justify-center gap-2 transition ${
                    plan.isPopular
                      ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-amber-500/40'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Contact for Membership
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Goal & Membership Inquiry Helper */}
        <div className="rounded-2xl bg-[#12151C] border border-neutral-800 p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white uppercase font-heading">
                Membership Inquiries Guide
              </h3>
              <p className="text-xs text-neutral-400">
                Prepare your training preferences before calling our front desk in Bole.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 font-heading mb-2">
                Your Primary Fitness Goal:
              </label>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                {goals.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 font-heading mb-2">
                Target Weekly Frequency:
              </label>
              <select
                value={selectedFrequency}
                onChange={(e) => setSelectedFrequency(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                {frequencies.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-300">
              <span className="text-neutral-400">Selected Focus:</span>{' '}
              <strong className="text-amber-400">{selectedGoal}</strong> ({selectedFrequency})
            </div>
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider font-heading transition"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              Call to Inquire Rates
            </a>
          </div>
        </div>

        {/* Currency & Payment Policy Notice */}
        <div className="mt-8 text-center text-xs text-neutral-400 flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-amber-500 flex-shrink-0" />
          <span>
            Payment is completed at Life Sport Gym in Bole using Ethiopian Birr (ETB). No online card payment is required.
          </span>
        </div>
      </div>
    </section>
  );
};
