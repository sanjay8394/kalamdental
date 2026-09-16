import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx}
            className={`rounded-2xl border transition-all overflow-hidden ${
              isOpen 
                ? 'bg-white border-medical-teal shadow-md' 
                : 'bg-warm-ivory border-gray-200 hover:border-medical-teal/40'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-extrabold text-deep-teal text-base sm:text-lg cursor-pointer focus:outline-none"
            >
              <span>{item.q || item.question}</span>
              <ChevronDown className={`w-5 h-5 text-medical-teal shrink-0 transition-transform duration-300 ${
                isOpen ? 'transform rotate-180 text-soft-coral' : ''
              }`} />
            </button>

            {isOpen && (
              <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm text-charcoal/80 leading-relaxed border-t border-gray-100 pt-3">
                {item.a || item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
