import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectCaptureSettings, selectCaptureMode } from '../../core/capture/settingsSlice';
import styles from './styles/index.css';

const CaptureButton = () => {
  const dispatch = useDispatch();
  const captureSettings = useSelector(selectCaptureSettings);
  const captureMode = useSelector(selectCaptureMode);

  const handleClick = () => {
    // TODO: Implement logic to handle capture button click
    // Example:
    // dispatch(captureScreen(captureMode, captureSettings));
  };

  return (
    <Button type="primary" className={styles.captureButton} onClick={handleClick}>
      Capture
    </Button>
  );
};

export default CaptureButton;