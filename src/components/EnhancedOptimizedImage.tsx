import { useState, useEffect } from 'react';

interface EnhancedOptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

const EnhancedOptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  objectFit = 'cover',
  priority = false,
  sizes = '100vw',
  quality = 80,
}: EnhancedOptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Convert to WebP if possible and optimize quality
  useEffect(() => {
    // Only attempt conversion for certain domains that support WebP
    const supportedDomains = ['images.pexels.com', 'images.unsplash.com'];
    const url = new URL(src, window.location.origin);
    
    if (supportedDomains.some(domain => url.hostname.includes(domain))) {
      // Add WebP format if the URL doesn't already have it
      if (!url.searchParams.has('fm')) {
        url.searchParams.set('fm', 'webp');
      }
      
      // Set quality parameter if supported
      if (!url.searchParams.has('q') && quality < 100) {
        url.searchParams.set('q', quality.toString());
      }
      
      // Add auto=compress if available for some services
      if (!url.searchParams.has('auto')) {
        url.searchParams.set('auto', 'compress');
      }
      
      setImageSrc(url.toString());
    }
  }, [src, quality]);

  // Preload image if priority is true
  useEffect(() => {
    if (priority && imageSrc) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = imageSrc;
      preloadLink.type = 'image/webp';
      document.head.appendChild(preloadLink);
      
      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [imageSrc, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setImageSrc('/placeholder.svg'); // Fallback to placeholder
  };

  // Generate inline styles for object-fit
  const imageStyle = {
    objectFit,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  } as React.CSSProperties;

  // Set dimensions to prevent layout shift
  const dimensionProps: Record<string, number | string> = {};
  if (width) dimensionProps.width = width;
  if (height) dimensionProps.height = height;

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    if (!src.includes('images.pexels.com') && !src.includes('images.unsplash.com')) {
      return undefined;
    }
    
    const baseUrl = new URL(src, window.location.origin);
    baseUrl.searchParams.set('fm', 'webp');
    if (quality < 100) {
      baseUrl.searchParams.set('q', quality.toString());
    }
    
    const widths = [640, 750, 828, 1080, 1200, 1920];
    return widths
      .map(w => {
        const url = new URL(baseUrl.toString());
        url.searchParams.set('w', w.toString());
        return `${url.toString()} ${w}w`;
      })
      .join(', ');
  };

  const srcSet = generateSrcSet();

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={dimensionProps}
    >
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={dimensionProps}
        />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        style={imageStyle}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        srcSet={srcSet}
        sizes={sizes}
        {...dimensionProps}
      />
    </div>
  );
};

export default EnhancedOptimizedImage;