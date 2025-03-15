import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  objectFit = 'cover',
  priority = false,
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Convert to WebP if possible (for URLs that support format conversion)
  useEffect(() => {
    // Only attempt conversion for certain domains that support WebP
    const supportedDomains = ['images.pexels.com', 'images.unsplash.com'];
    const url = new URL(src, window.location.origin);
    
    if (supportedDomains.some(domain => url.hostname.includes(domain))) {
      // Add WebP format if the URL doesn't already have it
      if (!url.searchParams.has('fm')) {
        url.searchParams.set('fm', 'webp');
        setImageSrc(url.toString());
      }
    }
  }, [src]);

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
        {...dimensionProps}
      />
    </div>
  );
};

export default OptimizedImage;