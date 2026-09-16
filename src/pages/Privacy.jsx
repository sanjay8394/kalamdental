import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <SectionTitle
        badge="Legal Notice"
        title="Privacy Notice & Data Handling"
        subtitle="Last Updated: September 2026"
        align="left"
      />

      <div className="prose prose-teal max-w-none text-charcoal/80 space-y-4 text-sm leading-relaxed">
        <h3 className="text-lg font-bold text-deep-teal">1. Direct Contact & Non-Patient Data Privacy</h3>
        <p>
          AuraDental Care ("we", "our", "us") values your privacy. This frontend clinic website does not store electronic medical records (EMR) or process online credit card transactions directly on this web server.
        </p>

        <h3 className="text-lg font-bold text-deep-teal">2. Contact Form & WhatsApp Enquiries</h3>
        <p>
          When you fill out an enquiry form or click to contact us via WhatsApp, the information you provide (name, phone number, preferred appointment timings) is strictly used by our clinic reception to contact you regarding your requested appointment.
        </p>

        <h3 className="text-lg font-bold text-deep-teal">3. Third-Party Links & Map Services</h3>
        <p>
          Our website includes links to third-party services such as Google Maps and WhatsApp. Clicking these links will redirect you to third-party platforms governed by their respective privacy policies.
        </p>

        <h3 className="text-lg font-bold text-deep-teal">4. Medical Records Confidentiality</h3>
        <p>
          All formal dental diagnoses, medical history, and clinical X-rays are documented during your physical clinic visit in accordance with HIPAA standards and medical confidentiality laws.
        </p>
      </div>
    </div>
  );
}
