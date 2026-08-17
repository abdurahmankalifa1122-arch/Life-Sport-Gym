import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'lazy' | 'eager';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle = 'Life Sport Gym Equipment',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-[#171B24] via-[#12151C] to-[#0B0D11] border border-neutral-800 flex flex-col items-center justify-center p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2">
          <Dumbbell className="w-6 h-6" />
        </div>
        <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400 font-heading">
          {fallbackTitle}
        </span>
        <span className="text-[10px] text-neutral-600 mt-0.5">Bole • Addis Ababa</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#12151C]">
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-900/80 animate-pulse flex items-center justify-center">
          <Dumbbell className="w-6 h-6 text-neutral-700 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
