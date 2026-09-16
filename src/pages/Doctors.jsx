import React from 'react';
import { doctors } from '../data/doctors';
import SectionTitle from '../components/SectionTitle';
import DoctorCard from '../components/DoctorCard';
import Button from '../components/Button';

export default function Doctors({ onSelectDoctor, onOpenAppointment }) {
  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-warm-ivory to-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10">
        <SectionTitle
          badge="Medical Team"
          title="Meet Our Board-Certified Dental Doctors"
          subtitle="Our internationally trained dental surgeons and specialists bring gentle hands and unmatched clinical expertise."
        />
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookDoctor={onSelectDoctor}
            />
          ))}
        </div>
      </section>

      {/* Trust Callout */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-deep-teal text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Looking for a Specific Doctor's Availability?
          </h3>
          <p className="text-sm text-gray-200 max-w-lg mx-auto">
            Our doctors consult on specific days of the week. Speak directly with our reception desk to reserve your preferred practitioner.
          </p>
          <div className="pt-2">
            <Button variant="coral" size="lg" onClick={onOpenAppointment}>
              Reserve Consultation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
