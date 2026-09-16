import React from 'react';
import { Phone, Clock, Sparkles } from 'lucide-react';
import { clinicInfo } from '../data/clinicInfo';

export default function AnnouncementBar() {
  return (
    <div className="bg-deep-teal text-white text-xs sm:text-sm py-2 px-4 font-medium border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-soft-coral text-white px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider animate-pulse flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Special Offer
          </span>
          <span className="text-gray-200">
            Get <strong>20% OFF</strong> Initial Consultation + Free 3D Dental Scan!
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a 
            href={`tel:${clinicInfo.phoneClean}`} 
            className="flex items-center gap-1.5 text-warm-ivory hover:text-soft-coral transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-soft-coral" />
            <span>Emergency: {clinicInfo.emergencyPhone}</span>
          </a>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="hidden md:flex items-center gap-1.5 text-gray-300">
            <Clock className="w-3.5 h-3.5 text-medical-teal" />
            Mon-Sat: 8:30AM - 7:30PM
          </span>
        </div>
      </div>
    </div>
  );
}
