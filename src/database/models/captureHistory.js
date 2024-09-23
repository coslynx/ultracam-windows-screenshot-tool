const mongoose = require('mongoose');

const captureHistorySchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
  },
  captureMode: {
    type: String,
    enum: ['FULL_SCREEN', 'REGION', 'WINDOW'],
    required: true,
  },
  captureTime: {
    type: Date,
    default: Date.now,
  },
  duration: {
    type: Number,
    required: true,
  },
});

module.exports = captureHistorySchema;