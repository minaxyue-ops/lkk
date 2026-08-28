import React from 'react';

interface LKKLogoProps {
  className?: string;
  imgClassName?: string;
  isLight?: boolean;
}

export default function LKKLogo({ className = '', imgClassName = '', isLight = false }: LKKLogoProps) {
  return (
    <div id="lkk-logo" className={`flex items-center select-none ${className}`}>
      <img 
        src="https://github.com/minaxyue-ops/MINA/releases/download/1/2.png" 
        alt="LKK 洛可可" 
        className={`h-7 md:h-7.5 w-auto object-contain transition-all ${isLight ? 'brightness-0 invert' : ''} ${imgClassName}`}
      />
    </div>
  );
}
