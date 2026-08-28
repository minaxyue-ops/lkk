import React, { useEffect, useRef, useState } from 'react';

interface ScrollSectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: React.ReactNode;
  dark?: boolean;
  align?: 'left' | 'center' | 'between';
  className?: string;
  rightElement?: React.ReactNode;
}

export const ScrollSectionTitle: React.FC<ScrollSectionTitleProps> = ({
  badge,
  title,
  subtitle,
  dark = false,
  className = '',
  rightElement
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // In focus when title enters viewport (between top 88% and bottom 10%)
      const isInFocus = rect.top < viewportHeight * 0.88 && rect.bottom > viewportHeight * 0.10;
      setIsRevealed(isInFocus);
    };

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility);
    checkVisibility();

    // Re-check after minor render delay
    const timer = setTimeout(checkVisibility, 100);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      clearTimeout(timer);
    };
  }, []);

  const cleanTitle = title.replace(/[。.]+$/, '');
  const chars = cleanTitle.split('');

  return (
    <div 
      ref={containerRef} 
      className={`scroll-section-header mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left ${className}`}
    >
      <div className="shrink-0 max-w-2xl">
        {badge && (
          <span 
            className={`text-xs font-semibold uppercase tracking-widest font-mono block mb-2 transition-colors duration-700 ${
              dark ? 'text-[#4FA8E8]' : 'text-[#007BC7]'
            }`}
          >
            {badge}
          </span>
        )}
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display select-none">
          {cleanTitle.split('').map((char, idx) => (
            <span
              key={idx}
              className="scroll-title-char inline-block"
              style={{
                color: isRevealed 
                  ? (dark ? '#FFFFFF' : '#1D1D1F')
                  : (dark ? 'rgba(255, 255, 255, 0.25)' : '#C2C2C2'),
                opacity: isRevealed ? 1 : 0.35,
                transform: isRevealed ? 'translateY(0)' : 'translateY(4px)',
                transition: `color 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.04}s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.04}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.04}s`,
                filter: isRevealed ? 'blur(0px)' : 'blur(0.5px)'
              }}
            >
              {char}
            </span>
          ))}
        </h2>
      </div>

      {(subtitle || rightElement) && (
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 shrink-0 max-w-full md:max-w-md lg:max-w-lg">
          {subtitle && (
            <p 
              className={`text-sm md:text-base leading-relaxed transition-all duration-700 font-normal ${
                dark ? 'text-neutral-400' : 'text-[#86868B]'
              } ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-1'}`}
            >
              {subtitle}
            </p>
          )}

          {rightElement && (
            <div className="shrink-0 ml-auto sm:ml-0">
              {rightElement}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScrollSectionTitle;
