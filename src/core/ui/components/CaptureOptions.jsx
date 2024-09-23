import React, { useState, useEffect } from 'react';
import { FULL_SCREEN, REGION, WINDOW, getCaptureMode, setCaptureMode } from '../../core/capture/captureModes';
import { Button, Radio, Space, Typography } from 'antd';
import styles from './styles/index.css';

const CaptureOptions = () => {
  const [activeMode, setActiveMode] = useState(getCaptureMode());

  const handleModeChange = (e) => {
    setActiveMode(e.target.value);
    setCaptureMode(e.target.value);
  };

  useEffect(() => {
    setActiveMode(getCaptureMode());
  }, []);

  return (
    <div className={styles.captureOptions}>
      <Space direction="vertical">
        <Typography.Title level={4}>Capture Mode</Typography.Title>
        <Radio.Group onChange={handleModeChange} value={activeMode}>
          <Radio value={FULL_SCREEN}>Full Screen</Radio>
          <Radio value={REGION}>Region</Radio>
          <Radio value={WINDOW}>Window</Radio>
        </Radio.Group>
      </Space>
    </div>
  );
};

export default CaptureOptions;