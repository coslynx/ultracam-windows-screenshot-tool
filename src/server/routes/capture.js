const express = require('express');
const router = express.Router();
const { CaptureHistory } = require('../database');
const { captureScreen } = require('../services/capture');
const { validateCaptureRequest } = require('../middleware/validate');

// POST /api/captures
router.post('/', validateCaptureRequest, async (req, res) => {
  const { mode, settings } = req.body;

  try {
    const imagePath = await captureScreen(mode, settings);
    const capture = new CaptureHistory({
      imagePath,
      captureMode: mode,
      captureTime: new Date(),
    });
    await capture.save();
    res.status(201).json({
      message: 'Screenshot captured successfully!',
      captureId: capture._id,
      imagePath,
    });
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;