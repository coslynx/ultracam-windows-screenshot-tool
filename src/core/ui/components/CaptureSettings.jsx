import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCaptureSettings,
  updateCaptureSetting,
} from '../../core/capture/settingsSlice';
import styles from './styles/index.css';

const { Option } = Select;

const CaptureSettings = () => {
  const dispatch = useDispatch();
  const captureSettings = useSelector(selectCaptureSettings);

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(captureSettings);
  }, [captureSettings, form]);

  const handleFormSubmit = (values) => {
    try {
      dispatch(updateCaptureSetting(values));
      message.success('Settings updated successfully!');
    } catch (error) {
      message.error('Error updating settings:', error.message);
    }
  };

  const handleFormatChange = (value) => {
    dispatch(updateCaptureSetting({ format: value }));
  };

  const handleQualityChange = (value) => {
    dispatch(updateCaptureSetting({ quality: value }));
  };

  const handleDelayChange = (value) => {
    dispatch(updateCaptureSetting({ delay: value }));
  };

  const handleSaveToChange = (value) => {
    dispatch(updateCaptureSetting({ saveTo: value }));
  };

  const handleCustomFileNameChange = (value) => {
    dispatch(updateCaptureSetting({ customFileName: value }));
  };

  const handleExcludeWindowsChange = (value) => {
    dispatch(updateCaptureSetting({ excludeWindows: value }));
  };

  return (
    <div className={styles.captureSettings}>
      <Form
        form={form}
        onFinish={handleFormSubmit}
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label="Format" name="format">
          <Select onChange={handleFormatChange}>
            <Option value="PNG">PNG</Option>
            <Option value="JPEG">JPEG</Option>
            <Option value="BMP">BMP</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Quality" name="quality">
          <Input
            type="number"
            min="0"
            max="100"
            onChange={(e) => handleQualityChange(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Delay" name="delay">
          <Input
            type="number"
            min="0"
            onChange={(e) => handleDelayChange(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Save To" name="saveTo">
          <Select onChange={handleSaveToChange}>
            <Option value="Desktop">Desktop</Option>
            <Option value="Documents">Documents</Option>
            <Option value="Pictures">Pictures</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Custom File Name" name="customFileName">
          <Input
            onChange={(e) => handleCustomFileNameChange(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Exclude Windows" name="excludeWindows">
          <Input.TextArea
            onChange={(e) => handleExcludeWindowsChange(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Settings
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CaptureSettings;