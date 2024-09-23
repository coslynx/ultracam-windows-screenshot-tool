const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectToDatabase, CaptureHistory, UserSettings } = require('./database');
const { captureRouter, settingsRouter, historyRouter, cloudRouter } = require('./routes');
const { authMiddleware, validateMiddleware, loggerMiddleware } = require('./middleware');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// Database Connection
connectToDatabase();

// Authentication
app.use(authMiddleware);

// Routes
app.use('/api/captures', validateMiddleware, captureRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/history', historyRouter);
app.use('/api/cloud', cloudRouter);

// Start Server
app.listen(port, () => {
  console.log(`UltraCam Server listening at http://localhost:${port}`);
});

module.exports = app;