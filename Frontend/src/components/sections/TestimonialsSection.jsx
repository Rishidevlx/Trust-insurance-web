import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { TESTIMONIALS } from '../../data/testimonials';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const TestimonialsSection = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  // Split testimonials into 2 balanced rows of 4 items each for desktop marquee
  const row1Testimonials = TESTIMONIALS.slice(0, 4);
  const row2Testimonials = TESTIMONIALS.slice(4, 8);

  // Duplicate arrays for seamless infinite 60fps marquee loop (Desktop)
  const duplicatedRow1 = [...row1Testimonials, ...row1Testimonials, ...row1Testimonials];
  const duplicatedRow2 = [...row2Testimonials, ...row2Testimonials, ...row2Testimonials];

  // Mobile auto-scroll logic (4 seconds interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const renderCard = (review, keyId) => (
    <div
      key={keyId}
      className="bg-white border border-slate-200/70 rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#00C07C]/60 transition-all duration-300 w-full sm:w-[380px] shrink-0 space-y-4 flex flex-col justify-between select-none"
    >
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-amber-500 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Comment Quote */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          "{review.comment}"
        </p>
      </div>

      {/* Customer Info Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
        <div className={`w-11 h-11 rounded-full ${review.avatarBg} text-white font-bold text-base flex items-center justify-center shrink-0 shadow-sm`}>
          {review.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-slate-900 truncate tracking-tight">
            {review.name}
          </h4>
          <p className="text-xs text-slate-500 truncate font-normal">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Graphic Ambient Accent */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              We love what we do, and <br className="hidden sm:inline" />
              they love the results.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
              Read how Trust Insurance helps families and business owners across Coimbatore safeguard their assets with zero-friction claims.
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* MOBILE VIEW ONLY: Single Row Slider with Manual Left/Right Arrows + Auto Scroll */}
      <div className="block md:hidden px-4 relative z-10 max-w-lg mx-auto">
        <div className="relative flex items-center justify-center">
          
          {/* Single Testimonial Card */}
          <div className="w-full">
            {renderCard(TESTIMONIALS[mobileIndex], `mobile-${TESTIMONIALS[mobileIndex].id}`)}
          </div>

        </div>

        {/* Mobile Navigation Controls: Left Arrow, Indicator Dots, Right Arrow */}
        <div className="flex items-center justify-between mt-6 px-2">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrevMobile}
            title="Previous Testimonial"
            aria-label="Previous Testimonial"
            className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md text-[#082F61] flex items-center justify-center hover:bg-[#082F61] hover:text-white transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === mobileIndex ? 'w-6 bg-[#00C07C]' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNextMobile}
            title="Next Testimonial"
            aria-label="Next Testimonial"
            className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md text-[#082F61] flex items-center justify-center hover:bg-[#082F61] hover:text-white transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      </div>

      {/* DESKTOP/TABLET VIEW ONLY: 2-Row Infinite Marquee Container */}
      <div className="hidden md:block relative z-10 space-y-6 overflow-hidden py-2">
        
        {/* Left & Right Gradient Mask Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20" />

        {/* ROW 1: Scroll Left to Right */}
        <div className="animate-marquee-left flex gap-6">
          {duplicatedRow1.map((review, idx) => renderCard(review, `desktop-r1-${review.id}-${idx}`))}
        </div>

        {/* ROW 2: Scroll Right to Left */}
        <div className="animate-marquee-right flex gap-6">
          {duplicatedRow2.map((review, idx) => renderCard(review, `desktop-r2-${review.id}-${idx}`))}
        </div>

      </div>

    </section>
  );
};
