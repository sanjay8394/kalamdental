import React, { useState } from 'react';
import { Sparkles, Calendar, UserCheck } from 'lucide-react';

export default function BeforeAfterSlider({ caseItem }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientPositionX, rect) => {
    const x = clientPositionX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-medical-teal/10 hover:shadow-elevated transition-all">
      {/* Title & Info */}
      <div className="mb-4">
        <span className="text-xs font-extrabold uppercase tracking-wider text-medical-teal bg-mint-mist px-3 py-1 rounded-full border border-medical-teal/20 inline-block mb-2">
          {caseItem.procedure}
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-deep-teal">
          {caseItem.title}
        </h3>
        <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal/70 mt-2">
          <span className="flex items-center gap-1 font-medium">
            <UserCheck className="w-3.5 h-3.5 text-medical-teal" /> {caseItem.doctor}
          </span>
          <span className="flex items-center gap-1 font-medium">
            <Calendar className="w-3.5 h-3.5 text-soft-coral" /> Duration: {caseItem.timeframe}
          </span>
        </div>
      </div>

      {/* Interactive Slider Area */}
      <div 
        className="relative h-64 sm:h-80 rounded-2xl overflow-hidden select-none cursor-ew-resize touch-pan-y"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img 
          src={caseItem.afterImg} 
          alt="After procedure" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute top-3 right-3 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm pointer-events-none">
          AFTER
        </span>

        {/* Before Image (Clipped overlay) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={caseItem.beforeImg} 
            alt="Before procedure" 
            className="absolute inset-0 max-w-none h-full object-cover"
            style={{ width: '100%', height: '100%' }}
          />
          <span className="absolute top-3 left-3 bg-deep-teal/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm pointer-events-none">
            BEFORE
          </span>
        </div>

        {/* Vertical Divider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-md pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-deep-teal shadow-lg flex items-center justify-center font-bold text-xs border-2 border-medical-teal">
            ↔
          </div>
        </div>
      </div>

      <p className="text-xs text-charcoal/70 mt-4 leading-relaxed italic text-center">
        "{caseItem.description}" (Slide sideways to compare results)
      </p>
    </div>
  );
}
