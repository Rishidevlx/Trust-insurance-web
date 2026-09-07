import React from 'react';
import { Mail, PhoneCall, Headphones, MapPin, Send } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

import contactImg from '../../assets/contact.png';

export const ContactSection = () => {
  const phoneNumbers = [
    '+91 84388 64669',
    '+91 98434 26959',
    '+91 98434 88869',
    '+91 98940 16167',
    '+91 98940 17797'
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-b border-slate-100 select-none">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Header Title, Subtitle & PolicyBazaar Style Enquiries Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            <ScrollReveal animation="fade-right" delay={100}>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                  Have a question? <br />
                  <span className="font-bold text-[#082F61]">Here to help.</span>
                </h2>
                
                {/* Accent Blue Line */}
                <div className="w-16 h-1.5 bg-[#1E64C8] rounded-full mt-4 mb-6" />

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Our friendly customer support team is your extended family. Speak your heart out. They listen with undivided attention to resolve your concerns. Give us a call, request a callback or drop us an email, we're here to help.
                </p>
              </div>
            </ScrollReveal>

            {/* Enquiries Info Cards (Exact PolicyBazaar Reference Card Layout) */}
            <div className="space-y-4 pt-2">
              
              {/* CARD 1: General & Email Enquiries (Paper Plane / Send Icon) */}
              <ScrollReveal animation="fade-right" delay={150}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-[#082F61] transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#082F61] flex items-center justify-center shrink-0 border border-blue-100">
                    <Send className="w-5 h-5 text-[#082F61]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      General Enquiries
                    </span>
                    <a
                      href="mailto:admin@trustinsurance.co.in"
                      className="text-base sm:text-lg font-bold text-[#082F61] hover:text-[#00C07C] transition-colors"
                    >
                      admin@trustinsurance.co.in
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* CARD 2: Customer Sales Enquiries (Headphones Icon) */}
              <ScrollReveal animation="fade-right" delay={200}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-[#082F61] transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#082F61] flex items-center justify-center shrink-0 border border-blue-100">
                    <Headphones className="w-5 h-5 text-[#082F61]" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Customer Sales Enquiries
                    </span>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-sm sm:text-base font-bold text-[#082F61]">
                      {phoneNumbers.map((num, idx) => (
                        <a
                          key={idx}
                          href={`tel:${num.replace(/\s+/g, '')}`}
                          className="hover:text-[#00C07C] transition-colors inline-flex items-center gap-1.5"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-[#00C07C]" />
                          <span>{num}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* CARD 3: Office Address (MapPin Icon) */}
              <ScrollReveal animation="fade-right" delay={250}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-[#082F61] transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#082F61] flex items-center justify-center shrink-0 border border-blue-100">
                    <MapPin className="w-5 h-5 text-[#082F61]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Coimbatore Office Address
                    </span>
                    <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                      Sankar Business Centre, No 96 to 102, 3rd Floor, Above Federal Bank, Pappanaickenpalayam, Coimbatore - 641037.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>

          {/* RIGHT COLUMN: Illustration Image (Non-Selectable & Non-Draggable) */}
          <div className="lg:col-span-5 flex items-center justify-center p-2 select-none pointer-events-none">
            <ScrollReveal animation="fade-left" delay={200}>
              <img
                src={contactImg}
                alt="Trust Insurance Customer Support"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                className="w-full max-w-[440px] sm:max-w-[500px] h-auto object-contain select-none pointer-events-none drop-shadow-xl"
              />
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
