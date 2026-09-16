import React from 'react';
import { CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { createWhatsAppLink } from '../data/clinicInfo';
import Button from './Button';

export default function PackageCard({ pkg, onSelectPackage }) {
  const whatsappMsg = `Hello, I am interested in enquiring about the "${pkg.name}". Please share available consultation timings.`;

  return (
    <div className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
      pkg.featured 
        ? 'bg-gradient-to-b from-white to-mint-mist/40 border-2 border-medical-teal shadow-elevated scale-[1.02]' 
        : 'bg-white border border-gray-200 shadow-card hover:shadow-elevated'
    }`}>
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-soft-coral text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            {pkg.badge}
          </span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="text-center pb-6 border-b border-gray-100">
          <h3 className="text-xl sm:text-2xl font-extrabold text-deep-teal mt-2">
            {pkg.name}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/70 mt-1 max-w-xs mx-auto">
            {pkg.tagline}
          </p>
        </div>

        {/* Inclusions checklist */}
        <div className="py-6 space-y-3">
          <span className="text-xs uppercase tracking-wider font-extrabold text-medical-teal block mb-2">
            Package Inclusions:
          </span>
          {pkg.inclusions.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Validity & CTAs */}
      <div className="pt-4 border-t border-gray-100 space-y-3">
        <p className="text-[11px] text-center text-charcoal/60 font-medium">
          ℹ️ {pkg.validity}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Button 
            variant={pkg.featured ? "coral" : "deepTeal"} 
            size="md" 
            onClick={() => onSelectPackage && onSelectPackage(pkg)}
            className="w-full text-xs"
          >
            Enquire Package
          </Button>

          <a
            href={createWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white transition-colors text-xs font-bold text-center flex items-center justify-center gap-1.5 border border-emerald-200"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
