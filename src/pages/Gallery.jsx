import React, { useState } from 'react';
import { galleryItems, galleryCategories } from '../data/gallery';
import SectionTitle from '../components/SectionTitle';
import LightboxModal from '../components/LightboxModal';
import { ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-warm-ivory to-mint-mist/40 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 border border-medical-teal/10 text-center">
        <SectionTitle
          badge="Photo Gallery"
          title="Explore Our Clinic & Clinical Results"
          subtitle="View high-resolution imagery of our treatment bays, sterilization suite, advanced scanners, and real smile results."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {galleryCategories.map((cat) => (
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

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-medical-teal/10 hover:shadow-elevated transition-all group cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden bg-mint-mist">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep-teal/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-md">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-deep-teal/90 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="text-sm font-extrabold text-deep-teal group-hover:text-medical-teal transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-charcoal/70 line-clamp-2 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      )}

    </div>
  );
}
