import { performance } from 'perf_hooks';

const measurePerformance = (func, ...args) => {
  const startTime = performance.now();
  const result = func(...args);
  const endTime = performance.now();
  const duration = endTime - startTime;
  return { result, duration };
};

const optimizeImage = async (imageData, options = {}) => {
  const { width, height, quality } = options;
  try {
    let optimizedImage = imageData;
    if (width || height) {
      optimizedImage = await resizeImage(optimizedImage, width, height);
    }
    if (quality) {
      optimizedImage = await compressImage(optimizedImage, quality);
    }
    return optimizedImage;
  } catch (error) {
    console.error('Error optimizing image:', error);
    throw error;
  }
};

export { measurePerformance, optimizeImage };