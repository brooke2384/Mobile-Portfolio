// This file handles preloading critical resources

// Preload critical fonts
export const preloadFonts = () => {
  const fontUrls = [
    // Add your font URLs here
    // Example: '/fonts/inter-var-latin.woff2'
  ];

  fontUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Preload critical images (like hero section images)
export const preloadCriticalImages = () => {
  const imageUrls = [
    // Add critical image URLs here
    // These should be images visible in the initial viewport
  ];

  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'image';
    link.type = 'image/webp'; // Adjust based on your image format
    document.head.appendChild(link);
  });
};

// Initialize preloading
export const initPreload = () => {
  // Only preload in production to avoid development overhead
  if (process.env.NODE_ENV === 'production') {
    preloadFonts();
    preloadCriticalImages();
  }
};