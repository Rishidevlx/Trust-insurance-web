import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { ShieldCheck, PhoneCall, ArrowRight, CheckCircle2, Award, Clock } from 'lucide-react';
import { Button } from '../common/Button';
import { CONTACT_INFO } from '../../config/contact';
import { ScrollReveal } from '../common/ScrollReveal';
import carInsuranceAnimation from '../../assets/animations lotties/Car insurance offers loading page.json';

export const HeroSection = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative bg-white text-slate-800 overflow-hidden">

      {/* ======= SIDE BY SIDE: Text Left | Lottie Right ======= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <ScrollReveal animation="fade-right" delay={100}>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#082F61]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="uppercase tracking-wide">Trusted Insurance Advisory</span>
              </div>

              {/* Headline */}

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.15] text-slate-900 mt-4">
                Protection You Can Trust.{' '}
                <span className="text-[#082F61]">Today, Tomorrow & Always.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mt-4">
                Compare the best insurance options across Two Wheeler, Car, Commercial Fleet, Life & Health. Get expert guidance and coverage that fits your needs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={() => onOpenQuoteModal()}
                  className="w-full sm:w-auto"
                >
                  Get a Free Quote
                </Button>

                <a
                  href={`tel:${CONTACT_INFO.primaryPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-[#082F61] border-2 border-[#082F61] text-[#082F61] hover:text-white font-bold text-base transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Talk to an Advisor</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Large Lottie Animation */}
          <div className="flex items-center justify-center">
            <ScrollReveal animation="fade-left" delay={200}>
              <Player
                autoplay
                loop
                src={carInsuranceAnimation}
                style={{ width: '100%', maxWidth: '600px', height: 'auto', paddingTop: '8rem' }}
              />
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* ======= BOTTOM: HDFC ERGO Style Stats Bar ======= */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ScrollReveal animation="fade-up" delay={250}>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">

              <div className="flex items-center justify-center gap-4 py-4 sm:py-0 sm:px-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#082F61]">100%</p>
                  <p className="text-sm font-medium text-slate-600">Cashless Garage Network</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 py-4 sm:py-0 sm:px-6">
                <div className="w-12 h-12 rounded-full bg-[#082F61]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#082F61]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#082F61]">Instant</p>
                  <p className="text-sm font-medium text-slate-600">Digital Policy Issuance</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 py-4 sm:py-0 sm:px-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#082F61]">Dedicated</p>
                  <p className="text-sm font-medium text-slate-600">Personal Claim Manager</p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>

    </section>
  );
};
