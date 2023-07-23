// src/controllers/intrusionAlerts.js

const IntrusionAlert = require('../models/IntrusionAlert');

// Controller function to store intrusion alerts
const storeIntrusionAlert = async (req, res, next) => {
  try {
    const { AlertType, SSID, MACAddress, SignalStrength, Channel, EncryptionType, BSSID, Timestamp } = req.body;

    // Create a new IntrusionAlert document in the database
    const intrusionAlert = new IntrusionAlert({
      AlertType,
      SSID,
      MACAddress,
      SignalStrength,
      Channel,
      EncryptionType,
      BSSID,
      Timestamp,
    });

    // Save the intrusion alert document to the database
    await intrusionAlert.save();

    res.status(201).json({ message: 'Intrusion alert stored successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  storeIntrusionAlert,
};
