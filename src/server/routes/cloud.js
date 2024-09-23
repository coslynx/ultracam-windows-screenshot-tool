const express = require('express');
const router = express.Router();
const { uploadImageToCloud } = require('../services/cloud');

router.post('/:service', async (req, res) => {
  const { service } = req.params;
  const { image, fileName, cloudCredentials } = req.body;

  try {
    const uploadResult = await uploadImageToCloud(service, fileName, image, cloudCredentials);
    res.status(200).json({ message: `Image uploaded to ${service} successfully!`, uploadResult });
  } catch (error) {
    console.error('Error uploading image to cloud:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;