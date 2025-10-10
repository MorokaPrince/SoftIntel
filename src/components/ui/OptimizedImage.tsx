"use client";

import { useState } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  style,
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate responsive image sources
  const getSources = (src: string) => {
    if (src.includes('unsplash') || src.includes('pexels')) {
      const baseSrc = src.replace(/\?.*$/, '');
      return [
        {
          media: '(max-width: 480px)',
          srcSet: `${baseSrc}?w=480&auto=format&fit=crop`,
          type: 'image/webp',
        },
        {
          media: '(max-width: 768px)',
          srcSet: `${baseSrc}?w=768&auto=format&fit=crop`,
          type: 'image/webp',
        },
        {
          media: '(max-width: 1024px)',
          srcSet: `${baseSrc}?w=1024&auto=format&fit=crop`,
          type: 'image/webp',
        },
        {
          srcSet: `${baseSrc}?w=1200&auto=format&fit=crop`,
          type: 'image/webp',
        },
      ];
    }
    return [];
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >
        <span className="text-gray-400 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={style}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}

      <picture>
        {getSources(src).map((source, index) => (
          <source
            key={index}
            media={source.media}
            srcSet={source.srcSet}
            type={source.type}
          />
        ))}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </picture>
    </div>
  );
};