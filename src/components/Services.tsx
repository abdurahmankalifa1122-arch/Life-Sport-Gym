import React from 'react';
import { Dumbbell, Shield, Layers, Flame, Zap, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES, GYM_INFO } from '../data/gymData';
import { SafeImage } from './SafeImage';

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Shield,
  Layers,
  Flame,
  Zap,
  Award,
};

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0B0D11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-amber-400 text-xs font-extrabold tracking-[0.2em] uppercase font-heading bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block mb-3">
              Training Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight uppercase">
              FACILITY & <span className="text-amber-400">SERVICES</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Equipped for all dimensions of serious physical development in Bole. Inquire directly at the gym for customized workout guidance.
            </p>
          </div>

          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-amber-500/30 hover:border-amber-500 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-heading transition shadow-lg self-start md:self-auto"
          >
            Inquire About Facility
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Dumbbell;
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-[#12151C] border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1 shadow-xl"
              >
                {/* Image Header (100% equipment / dark gym interior) */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <SafeImage
                    src={service.imageUrl}
                    alt={`${service.title} at Life Sport Gym Bole`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackTitle={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151C] via-transparent to-black/30" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-neutral-900/90 backdrop-blur-md border border-neutral-700 text-[10px] font-bold text-amber-400 uppercase tracking-wider font-heading">
                      {service.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading uppercase group-hover:text-amber-400 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400 uppercase font-heading">
                      Bole Facility
                    </span>
                    <a
                      href={`tel:${GYM_INFO.phoneRaw}`}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider font-heading flex items-center gap-1 transition"
                    >
                      Inquire Rates
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editable Service Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-center text-xs text-neutral-400 max-w-2xl mx-auto">
          <p>
            * All training services and gym floor access are subject to facility availability. Contact <strong className="text-neutral-200">Life Sport Gym</strong> at <a href={`tel:${GYM_INFO.phoneRaw}`} className="text-amber-400 hover:underline">{GYM_INFO.phone}</a> for details and customized training slots in Bole.
          </p>
        </div>
      </div>
    </section>
  );
};
