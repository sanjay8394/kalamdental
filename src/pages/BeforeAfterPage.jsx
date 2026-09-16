import React from 'react';
import { beforeAfterCases } from '../data/beforeAfter';
import SectionTitle from '../components/SectionTitle';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function BeforeAfterPage() {
  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-warm-ivory to-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10">
        <SectionTitle
          badge="Case Studies"
          title="Clinical Smile Transformations"
          subtitle="Explore authentic before and after clinical cases performed at AuraDental by our senior prosthodontists and orthodontists."
        />
      </section>

      {/* Cases Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterCases.map((caseItem) => (
            <BeforeAfterSlider key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </section>

    </div>
  );
}
