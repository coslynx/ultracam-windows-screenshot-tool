const mongoose = require('mongoose');

const userSettingsSchema = new mongoose.Schema({
  captureMode: {
    type: String,
    enum: ['FULL_SCREEN', 'REGION', 'WINDOW'],
    default: 'FULL_SCREEN',
  },
  format: {
    type: String,
    enum: ['PNG', 'JPEG', 'BMP'],
    default: 'PNG',
  },
  quality: {
    type: Number,
    min: 0,
    max: 100,
    default: 90,
  },
  delay: {
    type: Number,
    min: 0,
    default: 0,
  },
  excludeWindows: {
    type: [String],
    default: [],
  },
  saveTo: {
    type: String,
    enum: ['Desktop', 'Documents', 'Pictures'],
    default: 'Desktop',
  },
  customFileName: {
    type: String,
    default: null,
  },
});

module.exports = userSettingsSchema;