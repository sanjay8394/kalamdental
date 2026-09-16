import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { clinicInfo, createWhatsAppLink } from '../data/clinicInfo';

export default function StickyMobileCTA({ onOpenAppointment }) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-deep-teal/95 backdrop-blur-md text-white p-3 border-t border-medical-teal/30 shadow-2xl flex items-center justify-between gap-2">
      
      {/* Call Button */}
      <a
        href={`tel:${clinicInfo.phoneClean}`}
        className="flex-1 py-2.5 px-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/20 transition-colors"
      >
        <Phone className="w-4 h-4 text-soft-coral" />
        <span>Call Clinic</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={createWhatsAppLink("Hello! I would like to book a dental appointment.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      {/* Book Button */}
      <button
        onClick={onOpenAppointment}
        className="flex-1 py-2.5 px-2 rounded-xl bg-soft-coral hover:bg-[#db7a61] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Visit</span>
      </button>

    </div>
  );
}
