import { defaultSettings } from './settings';

const validateCaptureSettings = (key, value) => {
  switch (key) {
    case 'format':
      return ['PNG', 'JPEG', 'BMP'].includes(value);
    case 'quality':
      return value >= 0 && value <= 100;
    case 'delay':
      return value >= 0;
    case 'excludeWindows':
      return Array.isArray(value) && value.every((windowTitle) => typeof windowTitle === 'string');
    case 'saveTo':
      return ['Desktop', 'Documents', 'Pictures'].includes(value);
    case 'customFileName':
      return typeof value === 'string' || value === null;
    default:
      return false;
  }
};

const processCapturedImage = async (imageData, settings) => {
  // TODO: Implement image processing logic here, using libraries like Sharp or Jimp.
  // Example:
  // const processedImage = await sharp(imageData)
  //   .resize(settings.width, settings.height)
  //   .jpeg({ quality: settings.quality })
  //   .toBuffer();
  // return processedImage;
  return imageData; 
};

export { validateCaptureSettings, processCapturedImage };