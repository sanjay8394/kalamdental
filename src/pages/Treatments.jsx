import React, { useState } from 'react';
import { treatments, categories } from '../data/treatments';
import SectionTitle from '../components/SectionTitle';
import TreatmentCard from '../components/TreatmentCard';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';

export default function Treatments({ onSelectTreatment, onOpenAppointment }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTreatments = selectedCategory === "All" 
    ? treatments 
    : treatments.filter(t => t.category === selectedCategory);

  const generalFaqs = [
    { q: "Are dental treatments covered by insurance?", a: "We accept all major PPO insurance plans and provide direct insurance claim filing on your behalf." },
    { q: "What should I do in case of a sudden dental emergency?", a: "Call our emergency hotline immediately at +1 (555) 911-DENT. We guarantee same-day emergency appointments for severe pain or broken teeth." },
    { q: "How often should I get a routine dental checkup and cleaning?", a: "We recommend visiting every 6 months for professional ultrasonic cleaning, oral cancer screening, and preventive care." }
  ];

  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-warm-ivory to-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10 text-center">
        <SectionTitle
          badge="Dental Procedures"
          title="Comprehensive Dental Services & Treatments"
          subtitle="Explore our specialized clinical offerings designed to restore function, aesthetics, and lasting confidence."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-deep-teal text-white shadow-md'
                  : 'bg-white text-charcoal hover:bg-mint-mist border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((t) => (
            <TreatmentCard
              key={t.id}
              treatment={t}
              onSelectTreatment={onSelectTreatment}
            />
          ))}
        </div>
      </section>

      {/* Procedure FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Got Questions?"
          title="Frequently Asked Treatment Questions"
          subtitle="Clear answers regarding treatment duration, pain management, and care procedures."
        />

        <div className="mt-8">
          <FAQAccordion items={generalFaqs} />
        </div>

        <div className="text-center mt-10 bg-mint-mist/50 p-8 rounded-3xl border border-medical-teal/20">
          <h3 className="text-xl font-extrabold text-deep-teal">Have a Specific Treatment Question?</h3>
          <p className="text-xs sm:text-sm text-charcoal/70 mt-1 max-w-md mx-auto">
            Our head dental surgeon is ready to answer your specific case questions on WhatsApp.
          </p>
          <div className="mt-4">
            <Button variant="coral" size="md" onClick={onOpenAppointment}>
              Ask Our Specialists
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
