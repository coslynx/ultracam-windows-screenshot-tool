import { validateCaptureSettings } from './utils';

const defaultSettings = {
  format: 'PNG', // Default image format
  quality: 90, // Default image quality (for JPEG)
  delay: 0, // Default capture delay (in milliseconds)
  excludeWindows: [], // Array of window titles to exclude from capture
  saveTo: 'Desktop', // Default saving location
  customFileName: null, // Optional custom file naming pattern
};

let captureSettings = { ...defaultSettings };

const getCaptureSettings = () => {
  return { ...captureSettings };
};

const setCaptureSetting = (key, value) => {
  if (key in defaultSettings) {
    const isValid = validateCaptureSettings(key, value);
    if (isValid) {
      captureSettings[key] = value;
    } else {
      console.error(`Invalid value for setting: ${key}`);
    }
  } else {
    console.error(`Invalid setting key: ${key}`);
  }
};

export { defaultSettings, getCaptureSettings, setCaptureSetting };