import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function TestimonialCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card border border-medical-teal/10 hover:shadow-elevated transition-all flex flex-col justify-between space-y-4">
      <div>
        {/* Rating Stars & Verified Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          {review.verified && (
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-600" /> Verified Patient
            </span>
          )}
        </div>

        {/* Quote */}
        <p className="text-sm text-charcoal/85 leading-relaxed italic relative">
          <Quote className="w-6 h-6 text-mint-mist absolute -top-2 -left-2 -z-10 transform -scale-x-100" />
          "{review.quote}"
        </p>
      </div>

      {/* Author Footer */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={review.avatar} 
            alt={review.name}
            className="w-10 h-10 rounded-full object-cover border border-medical-teal/20"
          />
          <div>
            <h4 className="text-sm font-extrabold text-deep-teal">
              {review.name}
            </h4>
            <p className="text-xs text-charcoal/60">
              {review.role}
            </p>
          </div>
        </div>

        <span className="bg-mint-mist text-deep-teal text-[11px] font-bold px-2.5 py-1 rounded-lg border border-medical-teal/15">
          {review.treatment}
        </span>
      </div>
    </div>
  );
}
