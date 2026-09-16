import React from 'react';
import { Clock, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { createWhatsAppLink } from '../data/clinicInfo';
import Button from './Button';

export default function TreatmentCard({ treatment, onSelectTreatment }) {
  const whatsappMsg = `Hello, I would like to enquire about ${treatment.title}. Please share available appointment timings.`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-medical-teal/10 card-hover-effect flex flex-col group h-full">
      {/* Image Header */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-mint-mist">
        <img 
          src={treatment.image} 
          alt={treatment.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-deep-teal/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            {treatment.category}
          </span>
        </div>
        {treatment.popular && (
          <div className="absolute top-3 right-3">
            <span className="bg-soft-coral text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md animate-pulse">
              ★ Popular
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-extrabold text-deep-teal group-hover:text-medical-teal transition-colors duration-300 mb-2">
            {treatment.title}
          </h3>

          <p className="text-sm text-charcoal/80 leading-relaxed mb-4">
            {treatment.shortDesc}
          </p>

          <div className="flex items-center gap-2 text-xs text-charcoal/60 mb-4 bg-warm-ivory p-2.5 rounded-lg border border-gray-100">
            <Clock className="w-4 h-4 text-medical-teal shrink-0" />
            <span>Duration: {treatment.duration}</span>
          </div>

          {/* Top Benefits */}
          <div className="space-y-1.5 mb-4">
            {treatment.benefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-charcoal">
                <CheckCircle2 className="w-3.5 h-3.5 text-medical-teal shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
          <Button 
            variant="mint" 
            size="sm" 
            className="flex-1 text-xs group-hover:bg-medical-teal group-hover:text-white transition-colors"
            onClick={() => onSelectTreatment && onSelectTreatment(treatment)}
          >
            Details <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>

          <a
            href={createWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5 hover:scale-105"
            title="Enquire on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
