const express = require('express');
const router = express.Router();
const { CaptureHistory } = require('../database');

router.get('/', async (req, res) => {
  try {
    const captureHistory = await CaptureHistory.find();
    res.status(200).json(captureHistory);
  } catch (error) {
    console.error('Error fetching capture history:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const capture = await CaptureHistory.findById(id);
    if (capture) {
      res.status(200).json(capture);
    } else {
      res.status(404).json({ error: 'Capture not found' });
    }
  } catch (error) {
    console.error('Error fetching capture:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;