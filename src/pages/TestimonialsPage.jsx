import React from 'react';
import { testimonials } from '../data/testimonials';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-warm-ivory to-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10 text-center">
        <SectionTitle
          badge="Verified Reviews"
          title="What Our Patients Say About Us"
          subtitle="Real reviews from patients who experienced our gentle dental treatments."
        />

        <div className="mt-8 inline-flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-medical-teal/10">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-lg font-black text-deep-teal">4.9 / 5.0</span>
          <span className="text-xs text-charcoal/60 font-semibold">(520+ Google Reviews)</span>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </section>

    </div>
  );
}
