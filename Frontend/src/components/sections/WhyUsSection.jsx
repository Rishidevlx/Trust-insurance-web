import React from 'react';
import { WHY_US_FEATURES } from '../../data/whyUs';
import { Zap, UserCheck, Headphones, Heart, ShieldCheck, FileCheck, Award, Clock, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

const ICON_MAP = {
  Zap: Zap,
  UserCheck: UserCheck,
  Headphones: Headphones,
  Heart: Heart,
  ShieldCheck: ShieldCheck,
  FileCheck: FileCheck,
  Award: Award,
  Clock: Clock
};

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-[#F0F4F8] text-slate-900 relative overflow-hidden border-b border-slate-200/80">

      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-blue-50/40 via-sky-50/60 to-blue-50/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Pulse Badge */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#082F61]/10 text-[#082F61] border border-[#082F61]/20 text-xs font-bold uppercase tracking-wider mb-4">
              <span>THE TRUST ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              Why People Choose Trust Insurance
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
              We combine localized Coimbatore expertise with seamless claim settlements to protect what matters most to you.
            </p>
          </div>
        </ScrollReveal>

        {/* 8 Dashed Cards with staggered scroll reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {WHY_US_FEATURES.map((feature, idx) => {
            const IconComponent = ICON_MAP[feature.iconName] || ShieldCheck;

            return (
              <ScrollReveal 
                key={idx} 
                animation="fade-up" 
                delay={100 + (idx % 4) * 100}
              >
                <div className="group relative bg-white border-2 border-dashed border-slate-200 rounded-3xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-lg hover:border-solid hover:border-[#082F61] transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">

                  <div>
                    {/* Icon Container (Clean Hover Without Scale or Rotate) */}
                    <div className="w-14 h-14 rounded-2xl bg-[#082F61]/10 text-[#082F61] border border-[#082F61]/15 group-hover:bg-[#082F61] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
                      <IconComponent className="w-7 h-7 text-[#082F61] group-hover:text-white transition-colors" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-[#082F61] transition-colors duration-200">
                      {feature.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Card Action Link with Sliding Arrow */}
                  <div className="pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-[#082F61] group-hover:text-[#041B3B] gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
