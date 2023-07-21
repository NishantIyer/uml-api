// src/app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbUrl = require('./config/db'); // Import the db.js configuration

const app = express();

// Connect to MongoDB
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Enable CORS
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

// Routes
const scanResultsRouter = require('./routes/scanResults');
app.use('/api/scanResults', scanResultsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
