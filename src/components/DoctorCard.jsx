import React from 'react';
import { Award, Calendar, MessageSquare } from 'lucide-react';
import { createWhatsAppLink } from '../data/clinicInfo';
import Button from './Button';

export default function DoctorCard({ doctor, onBookDoctor }) {
  const whatsappMsg = `Hello, I would like to book a consultation with ${doctor.name} (${doctor.title}). Please let me know available appointment times.`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-medical-teal/10 card-hover-effect flex flex-col group">
      {/* Image & Experience Badge */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-mint-mist">
        <img 
          src={doctor.image} 
          alt={doctor.name}
          className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="bg-deep-teal/95 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1 shadow-sm">
            <Award className="w-3.5 h-3.5 text-soft-coral" />
            {doctor.experience}
          </span>
          {doctor.featured && (
            <span className="bg-soft-coral text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm animate-pulse">
              Top Rated
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-extrabold text-deep-teal group-hover:text-medical-teal transition-colors duration-300">
            {doctor.name}
          </h3>
          <p className="text-xs font-bold text-medical-teal uppercase tracking-wider mt-0.5">
            {doctor.title}
          </p>
          <p className="text-xs text-charcoal/60 mt-1 font-medium">
            {doctor.degrees}
          </p>

          <p className="text-sm text-charcoal/80 leading-relaxed mt-3">
            {doctor.bio}
          </p>

          {/* Specialties Tags */}
          <div className="mt-4">
            <span className="text-[11px] uppercase tracking-wider font-bold text-charcoal/50 block mb-1.5">
              Key Specializations:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {doctor.specialties.map((spec, idx) => (
                <span 
                  key={idx} 
                  className="bg-mint-mist text-deep-teal text-xs font-semibold px-2.5 py-1 rounded-lg border border-medical-teal/15 transition-colors group-hover:border-medical-teal/40"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal/70">
            <span className="font-semibold text-charcoal flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-medical-teal" /> Clinic Days:
            </span>
            <span className="font-bold text-deep-teal">{doctor.availableDays}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <Button 
            variant="coral" 
            size="sm" 
            className="flex-1"
            onClick={() => onBookDoctor && onBookDoctor(doctor)}
          >
            Book Visit
          </Button>

          <a
            href={createWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-all hover:scale-105"
            title="Chat with Doctor's Assistant on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
