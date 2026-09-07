import React from 'react';
import { STATS } from '../../data/stats';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const StatsSection = () => {
  return (
    <section id="track-record" className="py-20 bg-white text-slate-900 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean Headline & Description */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal animation="fade-right" delay={100} duration={700}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#082F61]/10 text-[#082F61] border border-[#082F61]/20 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#082F61]" />
                <span>Track Record & Impact</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15] mt-4">
                Trusted by Customers. <span className="text-[#082F61]">Built for Confidence.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                Our metrics reflect our unrelenting focus on prompt customer service, fast claims clearance, and insurance reliability across Coimbatore.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Editorial Metric List */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-100 border-y border-slate-100">
              {STATS.map((stat, idx) => {
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={150 + idx * 120} duration={600}>
                    <div className="py-5 sm:py-6 px-4 sm:px-6 rounded-2xl hover:bg-slate-50/80 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                      
                      {/* Left: Metric Number */}
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082F61] tracking-tight shrink-0 min-w-[90px] sm:min-w-[110px] group-hover:scale-105 transition-transform duration-300">
                        {stat.value}
                      </div>

                      {/* Middle: Label & Description */}
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#082F61] transition-colors flex items-center gap-2">
                          <span>{stat.label}</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                          {stat.description}
                        </p>
                      </div>

                      {/* Right: Small Accent Indicator */}
                      <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-slate-400 group-hover:bg-[#082F61] group-hover:text-white transition-all duration-300 shrink-0">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>

                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
