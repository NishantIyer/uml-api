// src/routes/intrusionAlerts.js

const express = require('express');
const router = express.Router();
const intrusionAlertsController = require('../controllers/intrusionAlerts');

// Route to store intrusion alerts
router.post('/', intrusionAlertsController.storeIntrusionAlert);

module.exports = router;
