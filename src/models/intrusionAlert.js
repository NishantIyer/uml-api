// src/models/IntrusionAlert.js

const mongoose = require('mongoose');

const intrusionAlertSchema = new mongoose.Schema({
  AlertType: {
    type: String,
    required: true,
  },
  SSID: {
    type: String,
    required: true,
  },
  MACAddress: {
    type: String,
    required: true,
  },
  SignalStrength: {
    type: Number,
    required: true,
  },
  Channel: {
    type: Number,
    required: true,
  },
  EncryptionType: {
    type: String,
    required: true,
  },
  BSSID: {
    type: String,
    required: true,
  },
  Timestamp: {
    type: Number,
    required: true,
  },
});

const IntrusionAlert = mongoose.model('IntrusionAlert', intrusionAlertSchema);

module.exports = IntrusionAlert;
