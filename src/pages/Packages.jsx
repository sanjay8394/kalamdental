import React from 'react';
import { packages } from '../data/packages';
import SectionTitle from '../components/SectionTitle';
import PackageCard from '../components/PackageCard';

export default function Packages({ onSelectPackage }) {
  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-warm-ivory to-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10">
        <SectionTitle
          badge="Value Plans"
          title="Transparent Dental Care Bundles"
          subtitle="Save up to 40% compared to individual treatment pricing with our transparent, all-inclusive care packages."
        />
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelectPackage={onSelectPackage}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
