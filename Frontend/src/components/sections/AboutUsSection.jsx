import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

import aboutImg from '../../assets/about.png';

export const AboutUsSection = ({ onOpenQuoteModal }) => {
  return (
    <section id="about-us" className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: about.png Image (Clean, No BG, No Border, Non-selectable) */}
          <div className="lg:col-span-6">
            <ScrollReveal animation="fade-right" delay={150}>
              <div className="flex items-center justify-center p-2">
                <div className="w-full max-w-[540px]">
                  <img
                    src={aboutImg}
                    alt="About Trust Insurance"
                    draggable={false}
                    className="w-full h-auto object-contain select-none pointer-events-none"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDE: Text Content & Core Features */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="fade-left" delay={200}>
              <SectionHeader
                badge="About Our Company"
                title="Built on Trust. Driven by Protection."
                subtitle="Trust Insurance is a premier insurance advisory firm based in Pappanaickenpalayam, Coimbatore."
                align="left"
              />

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 font-normal">
                We were founded on a simple principle: <strong>insurance should give you complete confidence, not complex confusion</strong>. Whether you're safeguarding a newly purchased bike, a commercial truck fleet, or your family's health, our certified advisors ensure you get optimal policy coverage without unnecessary expense.
              </p>

              {/* Core Values List Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#00C07C] shrink-0" />
                  <span>Transparent Terms & Zero Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#00C07C] shrink-0" />
                  <span>Dedicated Local Claim Officers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#00C07C] shrink-0" />
                  <span>Instant Digital Renewal System</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#00C07C] shrink-0" />
                  <span>Custom Fleet & Business Riders</span>
                </div>
              </div>

              {/* CTA Action Button */}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={() => onOpenQuoteModal()}
                  className="w-full sm:w-auto"
                >
                  Learn About Us & Get Advice
                </Button>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
