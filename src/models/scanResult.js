const mongoose = require('mongoose');

const scanResultSchema = new mongoose.Schema({
  SSID: {
    type: String,
    required: true,
  },
  MACAddress: {
    type: String,
    required: true,
  },
  signalStrength: {
    type: Number,
    required: true,
  },
  encryptionType: {
    type: Number,
    required: true,
  },
  channel: {
    type: Number,
    required: true,
  },
  isWhitelisted: {
    type: Boolean,
    required: true,
  },
  isSecure: {
    type: Boolean,
    required: true,
  },
  isBlacklisted: {
    type: Boolean,
    required: true,
  },
  ipAddress: {
    type: String,
    required: true,
  },
  subnetMask: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Intrusion alert fields
  intrusionAlert: {
    type: {
      type: String,
    },
    BSSID: {
      type: String,
    },
    Timestamp: {
      type: Number,
    },
  },
});

const ScanResult = mongoose.model('ScanResult', scanResultSchema);

module.exports = ScanResult;
