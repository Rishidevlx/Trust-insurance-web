import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { HOW_IT_WORKS_STEPS } from '../../data/howItWorks';
import { CheckSquare, FileText, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

import step1Img from '../../assets/steps images/Step-1-img.png';
import step2Img from '../../assets/steps images/step-2-img.png';
import step3Img from '../../assets/steps images/step-3-img.png';

const ICON_MAP = {
  CheckSquare: CheckSquare,
  FileText: FileText,
  ShieldCheck: ShieldCheck
};

const STEP_IMAGES = [step1Img, step2Img, step3Img];

export const HowItWorksSection = ({ onOpenQuoteModal }) => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeader
            badge="Simple 3-Step Process"
            title="Insurance Made Simple"
            subtitle="Getting your vehicle, life, or family health insured shouldn't take days. Here is how simple it is with Trust Insurance."
          />
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="mt-16 relative">
          
          {/* Vertical Central Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-12 w-1 bg-gradient-to-b from-[#082F61]/10 via-[#082F61] to-[#082F61]/10 -translate-x-1/2 rounded-full" />

          <div className="space-y-16 md:space-y-24">
            {HOW_IT_WORKS_STEPS.map((stepItem, idx) => {
              const IconComp = ICON_MAP[stepItem.iconName] || CheckSquare;
              const isEven = idx % 2 === 1; // Step 02 (index 1) has card on right on desktop
              const stepImage = STEP_IMAGES[idx];

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  
                  {/* Center Node / Number Badge (Desktop Only) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-full bg-[#00C07C] text-white font-bold text-xl items-center justify-center border-4 border-slate-50 shadow-xl group-hover:scale-110 transition-transform">
                    {stepItem.stepNumber}
                  </div>

                  {/* CARD BLOCK: Always order-1 on mobile (first), alternating on desktop */}
                  <div className={`w-full md:w-[44%] order-1 ${isEven ? 'md:order-2 md:ml-auto' : 'md:order-1 md:mr-auto'}`}>
                    <ScrollReveal animation={isEven ? 'fade-left' : 'fade-right'} delay={150}>
                      <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,192,124,0.12)] hover:border-[#00C07C] transition-all duration-300 relative">
                        
                        {/* Mobile Step Badge */}
                        <div className="flex md:hidden items-center justify-between mb-4">
                          <span className="px-3.5 py-1 rounded-full bg-[#00C07C] text-white font-bold text-xs">
                            Step {stepItem.stepNumber}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-[#00C07C]/10 text-[#00C07C] flex items-center justify-center">
                            <IconComp className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Desktop Header Info */}
                        <div className="hidden md:flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#00C07C]/10 text-[#00C07C] flex items-center justify-center font-bold">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#00C07C]">
                            Step {stepItem.stepNumber} — {stepItem.subtitle}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#082F61] transition-colors">
                          {stepItem.title}
                        </h3>

                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                          {stepItem.description}
                        </p>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#082F61]">
                          <span className="inline-flex items-center gap-1.5 text-[#00C07C] font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Guaranteed Fast Process</span>
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </div>

                      </div>
                    </ScrollReveal>
                  </div>

                  {/* IMAGE BLOCK: Always order-2 on mobile (second), alternating on desktop */}
                  <div className={`w-full md:w-[44%] order-2 ${isEven ? 'md:order-1 md:mr-auto' : 'md:order-2 md:ml-auto'}`}>
                    <ScrollReveal animation={isEven ? 'fade-right' : 'fade-left'} delay={150}>
                      <div className="flex items-center justify-center p-2">
                        <div className="animate-wave-float select-none pointer-events-none">
                          <img
                            src={stepImage}
                            alt={`Step ${stepItem.stepNumber}`}
                            draggable={false}
                            className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-auto object-contain select-none pointer-events-none"
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile Responsive Quote Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <ScrollReveal animation="zoom-in" delay={200}>
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto max-w-xs text-xs sm:text-base px-6 py-3"
            >
              Start Your Quote Journey Now
            </Button>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
