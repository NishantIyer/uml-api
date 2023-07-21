// src/routes/scanResults.js

const express = require('express');
const router = express.Router();
const scanResultsController = require('../controllers/scanResultsController');

// Route to store scan results
router.post('/', scanResultsController.storeScanResults);

// Route to fetch all scan results
router.get('/', scanResultsController.getAllScanResults);

module.exports = router;
