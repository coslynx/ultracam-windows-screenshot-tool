const express = require('express');
const router = express.Router();
const { UserSettings } = require('../database');

// GET /api/settings
router.get('/', async (req, res) => {
  try {
    const settings = await UserSettings.findOne();
    if (settings) {
      res.status(200).json(settings);
    } else {
      res.status(404).json({ error: 'User settings not found' });
    }
  } catch (error) {
    console.error('Error fetching user settings:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST /api/settings
router.post('/', async (req, res) => {
  const {
    captureMode,
    format,
    quality,
    delay,
    excludeWindows,
    saveTo,
    customFileName,
  } = req.body;

  try {
    let settings = await UserSettings.findOne();
    if (settings) {
      settings.captureMode = captureMode || settings.captureMode;
      settings.format = format || settings.format;
      settings.quality = quality || settings.quality;
      settings.delay = delay || settings.delay;
      settings.excludeWindows = excludeWindows || settings.excludeWindows;
      settings.saveTo = saveTo || settings.saveTo;
      settings.customFileName = customFileName || settings.customFileName;
      await settings.save();
      res.status(200).json({ message: 'User settings updated successfully!' });
    } else {
      settings = new UserSettings({
        captureMode,
        format,
        quality,
        delay,
        excludeWindows,
        saveTo,
        customFileName,
      });
      await settings.save();
      res.status(201).json({ message: 'User settings created successfully!' });
    }
  } catch (error) {
    console.error('Error updating user settings:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;