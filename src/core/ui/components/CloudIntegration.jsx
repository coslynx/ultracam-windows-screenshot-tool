import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCaptureSettings,
  updateCaptureSetting,
} from '../../core/capture/settingsSlice';
import { selectCloudServices } from '../../core/cloud/cloudSlice';
import { uploadImageToCloud } from '../../core/cloud/cloudActions';
import { selectCapturedImage } from '../../core/capture/captureSlice';
import { Modal, Button, Form, Select, Input, message } from 'antd';
import styles from './styles/index.css';

const CloudIntegration = () => {
  const dispatch = useDispatch();
  const captureSettings = useSelector(selectCaptureSettings);
  const cloudServices = useSelector(selectCloudServices);
  const capturedImage = useSelector(selectCapturedImage);
  const [cloudService, setCloudService] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cloudCredentials, setCloudCredentials] = useState({
    // ... initial credentials based on cloudService
  });

  // Function to handle cloud service selection
  const handleCloudServiceChange = (value) => {
    setCloudService(value);
    // Update cloudCredentials based on selected cloudService
    // For example:
    // if (value === 'Google Drive') {
    //   setCloudCredentials({
    //     clientId: 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
    //     clientSecret: 'YOUR_GOOGLE_DRIVE_CLIENT_SECRET',
    //   });
    // } else if (value === 'Dropbox') {
    //   setCloudCredentials({
    //     accessToken: 'YOUR_DROPBOX_ACCESS_TOKEN',
    //   });
    // }
    // ...
  };

  // Function to handle cloud credentials update
  const handleCredentialChange = (key, value) => {
    setCloudCredentials({ ...cloudCredentials, [key]: value });
  };

  // Function to handle cloud upload
  const handleUpload = async () => {
    if (!cloudService) {
      message.error('Please select a cloud service');
      return;
    }
    try {
      await dispatch(uploadImageToCloud({
        cloudService,
        cloudCredentials,
        image: capturedImage,
        fileName: `${captureSettings.customFileName || 'UltraCam-Capture'}-${new Date().getTime()}.${captureSettings.format.toLowerCase()}`,
      }));
      setIsModalVisible(false);
      message.success(`Image uploaded to ${cloudService}`);
    } catch (error) {
      message.error(`Error uploading image: ${error.message}`);
    }
  };

  useEffect(() => {
    // Update cloudCredentials when cloudService changes
    if (cloudService) {
      // ... logic to update cloudCredentials based on cloudService
    }
  }, [cloudService]);

  return (
    <div className={styles.cloudIntegration}>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Upload to Cloud
      </Button>
      <Modal
        title="Upload to Cloud"
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Cloud Service">
            <Select
              value={cloudService}
              onChange={handleCloudServiceChange}
            >
              {cloudServices.map((service) => (
                <Select.Option key={service} value={service}>
                  {service}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/ Cloud credentials form items /}
          {/ Example for Google Drive: /}
          {cloudService === 'Google Drive' && (
            <>
              <Form.Item label="Client ID">
                <Input
                  value={cloudCredentials.clientId}
                  onChange={(e) =>
                    handleCredentialChange('clientId', e.target.value)
                  }
                />
              </Form.Item>
              <Form.Item label="Client Secret">
                <Input
                  value={cloudCredentials.clientSecret}
                  onChange={(e) =>
                    handleCredentialChange('clientSecret', e.target.value)
                  }
                />
              </Form.Item>
            </>
          )}
          {/ ... other cloud credentials based on cloudService /}
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleUpload}>
              Upload
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CloudIntegration;