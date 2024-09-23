const FULL_SCREEN = 'FULL_SCREEN';
const REGION = 'REGION';
const WINDOW = 'WINDOW';

let activeCaptureMode = FULL_SCREEN;

const getCaptureMode = () => {
  return activeCaptureMode;
};

const setCaptureMode = (mode) => {
  if (mode === FULL_SCREEN || mode === REGION || mode === WINDOW) {
    activeCaptureMode = mode;
  } else {
    console.error('Invalid capture mode');
  }
};

export { FULL_SCREEN, REGION, WINDOW, getCaptureMode, setCaptureMode };