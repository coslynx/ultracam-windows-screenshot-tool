const mongoose = require('mongoose');
const { captureHistorySchema, userSettingsSchema } = require('./models');

const connectToDatabase = async () => {
  try {
    const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/ultracam'; 
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

const CaptureHistory = mongoose.model('CaptureHistory', captureHistorySchema);
const UserSettings = mongoose.model('UserSettings', userSettingsSchema);

module.exports = {
  connectToDatabase,
  CaptureHistory,
  UserSettings,
};