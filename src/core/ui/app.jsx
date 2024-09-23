import React, { useState, useEffect } from 'react';
import {
  FULL_SCREEN,
  REGION,
  WINDOW,
  getCaptureMode,
  setCaptureMode,
} from '../../core/capture/captureModes';
import {
  defaultSettings,
  getCaptureSettings,
  setCaptureSetting,
} from '../../core/capture/settings';
import CaptureButton from './components/CaptureButton';
import CaptureOptions from './components/CaptureOptions';
import CaptureSettings from './components/CaptureSettings';
import CaptureHistory from './components/CaptureHistory';
import ImageEditor from './components/ImageEditor';
import CloudIntegration from './components/CloudIntegration';
import {
  measurePerformance,
  optimizeImage,
} from '../../core/utils/performance';
import { resizeImage, compressImage } from '../../core/utils/imageProcessing';
import styles from './styles/index.css';

const App = () => {
  const [captureMode, setCaptureModeApp] = useState(getCaptureMode());
  const [captureSettings, setCaptureSettingsApp] = useState(
    getCaptureSettings()
  );
  const [capturedImage, setCapturedImage] = useState(null);
  const [captureHistory, setCaptureHistory] = useState([]);

  // Function to capture the screen
  const captureScreen = async (mode, settings) => {
    try {
      // Measure the performance of the screen capture process
      const { result, duration } = measurePerformance(captureScreen, mode, settings);

      // Set the captured image state
      setCapturedImage(result);

      // Optimize the captured image
      const optimizedImage = await optimizeImage(result, {
        width: settings.width,
        height: settings.height,
        quality: settings.quality,
      });

      // Update the capture history
      setCaptureHistory([
        ...captureHistory,
        {
          imagePath: result,
          captureMode: mode,
          captureTime: new Date().toLocaleString(),
          duration,
        },
      ]);

      // Log the capture information
      console.log(
        `Screen captured in ${duration}ms using mode: ${mode}, settings:`,
        settings
      );
    } catch (error) {
      console.error('Error capturing screen:', error);
    }
  };

  // Handle mode change
  const handleModeChange = (mode) => {
    setCaptureModeApp(mode);
    setCaptureMode(mode);
  };

  // Handle setting change
  const handleSettingChange = (key, value) => {
    setCaptureSettingsApp({ ...captureSettings, [key]: value });
    setCaptureSetting(key, value);
  };

  // Fetch capture history from database
  const fetchCaptureHistory = async () => {
    try {
      // TODO: Implement database interaction to fetch capture history
      // Example using a hypothetical database API:
      // const history = await database.getCaptureHistory();
      // setCaptureHistory(history);
    } catch (error) {
      console.error('Error fetching capture history:', error);
    }
  };

  useEffect(() => {
    fetchCaptureHistory();
  }, []);

  return (
    <div className={styles.container}>
      <h1>UltraCam</h1>
      <CaptureButton
        captureScreen={captureScreen}
        mode={captureMode}
        settings={captureSettings}
      />
      <CaptureOptions
        activeMode={captureMode}
        handleModeChange={handleModeChange}
      />
      <CaptureSettings
        settings={captureSettings}
        handleSettingChange={handleSettingChange}
      />
      <CaptureHistory history={captureHistory} />
      {capturedImage && (
        <ImageEditor
          image={capturedImage}
          onEdit={(editedImage) => {
            setCapturedImage(editedImage);
          }}
        />
      )}
      <CloudIntegration />
    </div>
  );
};

export default App;