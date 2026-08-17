import React from 'react';
import { Target, Zap, Shield, Award, CheckCircle, ArrowUpRight, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { SafeImage } from './SafeImage';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Dumbbell,
      title: 'Real Strength & Iron',
      description:
        'Equipped with solid Olympic barbells, heavy dumbbells, and robust squat cages built specifically for progressive overload.',
    },
    {
      icon: Target,
      title: 'Uncompromised Discipline',
      description:
        'An athletic environment free from distractions where serious lifters and fitness enthusiasts focus strictly on daily training consistency.',
    },
    {
      icon: Shield,
      title: 'Maintained Equipment',
      description:
        'Well-kept pin-loaded machines, plate-loaded presses, cable systems, and cardio units checked regularly for optimal safety.',
    },
    {
      icon: Award,
      title: 'Personal Progress',
      description:
        'Whether your goal is muscle hypertrophy, fat loss, or cardiovascular endurance, our facility provides the tools to measure continuous gains.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0D1017] border-y border-neutral-800/80 relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-extrabold tracking-[0.2em] uppercase font-heading bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">
            About Life Sport Gym
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight uppercase leading-tight">
            ENGINEERED FOR <span className="text-amber-400">DISCIPLINE & RESULTS</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Located in <strong className="text-neutral-200">Bole, Addis Ababa</strong>, Life Sport Gym delivers a premier training environment where dedication meets high-capacity fitness equipment.
          </p>
        </div>

        {/* Two-Column Grid: Image Showcase + Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Premium Equipment Visual Showcase (100% equipment / interior) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 bg-[#12151C] shadow-2xl aspect-[4/3] sm:aspect-[16/10]">
              <SafeImage
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80"
                alt="Life Sport Gym Male Athlete Heavy Dumbbell Matrix and Free Weight Zone in Bole"
                className="w-full h-full object-cover"
                fallbackTitle="Dumbbell & Free Weight Training Zone"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11]/90 via-transparent to-black/20" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B0D11]/85 backdrop-blur-md border border-neutral-700/60">
                <span className="text-xs font-bold text-amber-400 uppercase font-heading tracking-widest block">
                  Bole Training Facility
                </span>
                <p className="text-xs text-neutral-300 mt-0.5">
                  High-density free weights, heavy barbells, and selectorized isolation machines.
                </p>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-gradient-to-br from-neutral-900 to-neutral-950 p-5 rounded-2xl border border-amber-500/30 shadow-2xl items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-white uppercase font-heading block">
                  Bole • Addis Ababa
                </span>
                <span className="text-[11px] text-neutral-400">
                  Direct Front-Desk Registration in ETB
                </span>
              </div>
            </div>
          </div>

          {/* Right: The Standards & Philosophy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-heading">
                Our Core Focus
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading uppercase mt-1">
                A Serious Space for <span className="text-amber-400">Consistent Athletes</span>
              </h3>
            </div>

            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              At Life Sport Gym, we believe that physical transformation is the direct outcome of relentless consistency, progressive resistance, and a no-nonsense training space. Our facility is designed to serve both seasoned strength athletes and daily fitness members who value time, effort, and authentic progression.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading uppercase">
                    Comprehensive Lifting Zones
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Racks, benches, cable stations, and cardio lines arranged for optimal workout flow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading uppercase">
                    Bole Prime Accessibility
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Centrally located in Bole, Addis Ababa, easily reachable before work, after work, or on weekends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading uppercase">
                    Dedicated Community
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Train alongside dedicated lifters who push each other to reach new personal records.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider font-heading transition-colors"
              >
                Explore Training Services
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#12151C] border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700/60 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white uppercase font-heading mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
