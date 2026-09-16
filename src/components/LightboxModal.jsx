import React from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-deep-teal/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-deep-teal/80 text-white flex items-center justify-center hover:bg-soft-coral transition-colors shadow-md"
          aria-label="Close image"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption Info */}
        <div className="p-6 bg-warm-ivory border-t border-gray-200">
          <span className="bg-mint-mist text-medical-teal text-xs font-bold px-3 py-1 rounded-full border border-medical-teal/20 inline-block mb-2">
            {item.category}
          </span>
          <h3 className="text-xl font-extrabold text-deep-teal">
            {item.title}
          </h3>
          {item.caption && (
            <p className="text-sm text-charcoal/80 mt-1 leading-relaxed">
              {item.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
