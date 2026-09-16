import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <SectionTitle
        badge="Legal Terms"
        title="Website Terms of Service & Disclaimer"
        subtitle="Last Updated: September 2026"
        align="left"
      />

      <div className="prose prose-teal max-w-none text-charcoal/80 space-y-4 text-sm leading-relaxed">
        <h3 className="text-lg font-bold text-deep-teal">1. Educational Purpose Disclaimer</h3>
        <p>
          The information, procedure descriptions, pricing estimates, and blog articles published on this website are provided for general educational purposes only. They do not constitute formal medical diagnosis or definitive treatment plans.
        </p>

        <h3 className="text-lg font-bold text-deep-teal">2. Clinical Consultations</h3>
        <p>
          Final treatment recommendations and exact treatment costs are established after a physical clinical examination and diagnostic 3D imaging by a licensed dentist at our San Francisco facility.
        </p>

        <h3 className="text-lg font-bold text-deep-teal">3. Emergency Care Notice</h3>
        <p>
          If you are experiencing a life-threatening medical emergency or severe facial trauma, please call 911 or visit the nearest hospital emergency room immediately.
        </p>
      </div>
    </div>
  );
}
