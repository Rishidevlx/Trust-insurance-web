import React from 'react';

export const SectionHeader = ({
  badge = null,
  title,
  subtitle = null,
  align = 'center', // left | center | right
  dark = false,
  className = ''
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignment[align]} ${className}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
          dark ? 'bg-blue-500/20 text-blue-200 border border-blue-400/30' : 'bg-[#082F61]/10 text-[#082F61] border border-[#082F61]/20'
        }`}>
          {badge}
        </span>
      )}
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight ${
        dark ? 'text-white' : 'text-[#082F61]'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-blue-100/80' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}

      {align === 'center' && (
        <div className="w-16 h-1 bg-[#082F61] rounded-full mt-4 opacity-80" />
      )}
    </div>
  );
};
