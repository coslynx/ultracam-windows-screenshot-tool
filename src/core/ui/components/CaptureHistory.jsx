import React, { useState, useEffect } from 'react';
import { List, Avatar, Space, Typography, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectCaptureHistory, deleteCaptureFromHistory } from '../../core/capture/captureSlice';
import styles from './styles/index.css';

const CaptureHistory = () => {
  const dispatch = useDispatch();
  const captureHistory = useSelector(selectCaptureHistory);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteCaptureFromHistory(id));
  };

  const handleViewImage = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.captureHistory}>
      <Typography.Title level={4}>Capture History</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={captureHistory}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="primary" onClick={() => handleViewImage(item)}>
                View
              </Button>,
              <Button type="danger" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.imagePath} />}
              title={<a href="#">{item.captureTime}</a>}
              description={item.captureMode}
            />
          </List.Item>
        )}
      />
      <Modal
        title="Captured Image"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <img src={selectedImage?.imagePath} alt="Captured Image" style={{ width: '100%', height: 'auto' }} />
      </Modal>
    </div>
  );
};

export default CaptureHistory;