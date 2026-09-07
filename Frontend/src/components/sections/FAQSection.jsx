import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Header Title, Overview & Trust Features */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal animation="fade-right" delay={100}>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
                  FAQS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                  Frequently <span className="font-bold text-[#082F61]">asked</span> questions
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
                  With over two decades of trusted service across Tamil Nadu, we pride ourselves on building lasting relationships through face-to-face consultations and personalized insurance solutions.
                </p>
              </div>
            </ScrollReveal>

            {/* Trust Features Checklist */}
            <div className="space-y-6 pt-2 border-t border-slate-200/80">
              <ScrollReveal animation="fade-right" delay={150}>
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#00C07C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00C07C]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Personal Relationship Managers
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                      Every client is assigned a dedicated relationship manager who understands your local context and provides personalized guidance in your preferred language.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={200}>
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#00C07C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00C07C]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Hassle-Free Documentation Support
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                      Our experienced team handles all paperwork and documentation, making the insurance process smooth and straightforward for you.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* RIGHT COLUMN: Numbered Accordion List (1, 2, 3, 4, 5, 6) */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <ScrollReveal key={idx} animation="fade-left" delay={100 + idx * 60}>
                  <div 
                    className={`bg-white border rounded-2xl transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden ${
                      isOpen ? 'border-[#00C07C] shadow-md' : 'border-slate-200/70 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4 min-w-0 pr-4">
                        <span className="text-slate-300 font-bold text-xl sm:text-2xl shrink-0">
                          {idx + 1}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                          {faq.question}
                        </h3>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#00C07C]/10 text-[#00C07C] rotate-180' : 'text-slate-400'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in duration-150 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
