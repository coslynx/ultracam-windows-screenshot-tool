import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Row, Col, Spin, message } from 'antd';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../core/utils/cropImage';
import { selectCapturedImage } from '../../core/capture/captureSlice';
import { useSelector } from 'react-redux';
import styles from './styles/index.css';

const ImageEditor = ({ image, onEdit }) => {
  const capturedImage = useSelector(selectCapturedImage);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cropperRef = useRef(null);

  const onCropChange = (crop, zoom) => {
    setCrop(crop);
    setZoom(zoom);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      if (croppedAreaPixels) {
        const croppedImageResult = await getCroppedImg(capturedImage, croppedAreaPixels);
        setCroppedImage(croppedImageResult);
      }
      setIsModalVisible(true);
    } catch (error) {
      message.error(`Error cropping image: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    if (croppedImage) {
      onEdit(croppedImage);
      setIsModalVisible(false);
    }
  };

  return (
    <div className={styles.imageEditor}>
      <Button type="primary" onClick={handleSave}>
        Edit Image
      </Button>
      <Modal
        title="Crop Image"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleConfirm} disabled={!croppedImage}>
            Confirm
          </Button>,
        ]}
      >
        <Spin spinning={isLoading}>
          <Row>
            <Col span={24}>
              <Cropper
                image={capturedImage}
                crop={crop}
                zoom={zoom}
                onCropChange={onCropChange}
                onCropComplete={onCropComplete}
                aspect={16 / 9}
                ref={cropperRef}
                style={{ width: '100%', height: '300px' }}
              />
            </Col>
          </Row>
          {croppedImage && (
            <img src={croppedImage} alt="Cropped Image" style={{ width: '100%', height: 'auto' }} />
          )}
        </Spin>
      </Modal>
    </div>
  );
};

export default ImageEditor;