const express = require('express');
const router = express.Router();
const intrusionAlertsController = require('../controllers/intrusionAlerts');

// Route to store intrusion alerts
router.post('/', intrusionAlertsController.storeIntrusionAlert);

// Route to fetch all intrusion alerts
router.get('/', intrusionAlertsController.getAllIntrusionAlerts);

module.exports = router;
