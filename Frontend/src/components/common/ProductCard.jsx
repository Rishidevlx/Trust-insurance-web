import React from 'react';
import { Bike, Car, Truck, HeartHandshake, HeartPulse, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

const ICON_MAP = {
  Bike: Bike,
  Car: Car,
  Truck: Truck,
  ShieldHeart: HeartHandshake,
  HeartPulse: HeartPulse
};

export const ProductCard = ({ product, onSelectQuote }) => {
  const IconComponent = ICON_MAP[product.iconName] || ShieldCheck;

  return (
    <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-trust hover:shadow-trust-hover hover:border-[#00C07C] transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#082F61]/5 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

      <div>
        {/* Header Icon + Popular Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#082F61]/10 text-[#082F61] flex items-center justify-center group-hover:bg-[#082F61] group-hover:text-white transition-all duration-300 shadow-sm">
            <IconComponent className="w-7 h-7" />
          </div>

          {product.popularBadge && (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-[#00C07C]/10 text-[#00C07C] border border-[#00C07C]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C07C] animate-pulse" />
              Popular
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#082F61] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs font-semibold text-[#082F61] mt-1 mb-3">
          {product.tagline}
        </p>
        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Benefits List */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
          {product.keyBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#00C07C] shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4">
        <Button
          variant="outline"
          fullWidth
          icon={ArrowRight}
          iconPosition="right"
          onClick={() => onSelectQuote(product.id)}
          className="group-hover:bg-[#082F61] group-hover:text-white"
        >
          Get Quote
        </Button>
      </div>
    </div>
  );
};
