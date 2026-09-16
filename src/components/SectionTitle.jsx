import React from 'react';

export default function SectionTitle({ 
  badge, 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) {
  const alignment = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignment} ${className}`}>
      {badge && (
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-mint-mist text-medical-teal border border-medical-teal/20 mb-3">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-deep-teal tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
