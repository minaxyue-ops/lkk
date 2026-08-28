import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
}

export interface LeftCardData {
  badgeTag: string;
  badgeText: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export interface CategorySection04Props {
  sectionId?: string;
  badge?: string;
  title: string;
  description: string;
  leftCard: LeftCardData;
  rightServices: ServiceItem[];
}

export default function CategorySection04({
  sectionId = 'section-service-definition',
  badge = 'SERVICE DEFINITION / 04',
  title,
  description,
  leftCard,
  rightServices,
}: CategorySection04Props) {
  const cleanTitle = title.replace(/[。.]+$/, '');
  return (
    <section id={sectionId} className="py-20 md:py-28 bg-[#FFFFFF] border-b border-black/[0.06] w-full overflow-hidden">
      <div className="max-w-[95%] xl:max-w-[1440px] 2xl:max-w-[1560px] w-full mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="min-w-0 max-w-2xl">
            <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-widest font-mono block mb-2">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
              {cleanTitle}
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#86868B] max-w-xl leading-relaxed font-normal shrink-0 md:max-w-md lg:max-w-xl">
            {description}
          </p>
        </div>

        {/* Dual Column Layout: Left Immersive Visual Card + Right 3 Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full">
          
          {/* Left Column: Immersive Apple Bento Visual Card */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-black/[0.06] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 text-white group min-w-0 w-full min-h-[400px] sm:min-h-[440px] lg:min-h-[480px] h-full bg-[#161617]">
            {/* Background Image */}
            <img 
              src={leftCard.image} 
              alt={leftCard.title}
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
              referrerPolicy="no-referrer"
            />

            {/* Apple Dark Contrast Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 z-10 pointer-events-none" />

            {/* Text Content & CTA Button */}
            <div className="relative z-20 flex flex-col justify-between h-full min-w-0 w-full">
              <div className="min-w-0">
                <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-mono font-semibold px-3 py-1 rounded-full border border-white/20 whitespace-nowrap">
                    {leftCard.badgeTag}
                  </span>
                  <span className="text-xs font-mono font-medium text-white/80 uppercase tracking-wider whitespace-nowrap">
                    {leftCard.badgeText}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white font-display mb-3 tracking-tight leading-tight break-words">
                  {leftCard.title}
                </h3>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg break-words font-normal">
                  {leftCard.description}
                </p>
              </div>

              {/* Bottom CTA Button - Apple Pill Style */}
              <div className="pt-6 border-t border-white/15 mt-6 shrink-0">
                <button 
                  onClick={leftCard.onCtaClick}
                  className="w-full sm:w-auto bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-medium py-3 px-7 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>{leftCard.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200 shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Apple Bento Service Cards */}
          <div className="lg:col-span-5 bg-[#F5F5F7] rounded-3xl p-4 sm:p-6 border border-black/[0.04] flex flex-col justify-between gap-4 min-w-0 w-full h-full min-h-[400px] sm:min-h-[440px] lg:min-h-[480px]">
            {rightServices.map((item) => (
              <div 
                key={item.num}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.04] hover:border-black/[0.1] hover:shadow-md transition-all duration-300 flex-1 flex flex-col justify-center min-w-0 overflow-hidden group/item"
              >
                <div className="flex items-start gap-4 min-w-0 w-full">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#0071E3] shrink-0 w-8 leading-tight">
                    {item.num}
                  </span>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F] font-display mb-1.5 leading-snug break-words group-hover/item:text-[#0071E3] transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed break-words font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
