// src/controllers/scanResultsController.js

const ScanResult = require('../models/scanResult');

// Handler to store scan results
const storeScanResults = async (req, res, next) => {
  try {
    const scanResultData = req.body;
    const scanResult = new ScanResult(scanResultData);
    await scanResult.save();
    res.status(201).json({ message: 'Scan result stored successfully' });
  } catch (err) {
    next(err);
  }
};

// Handler to fetch all scan results
const getAllScanResults = async (req, res, next) => {
  try {
    const scanResults = await ScanResult.find().sort({ createdAt: -1 });
    res.json(scanResults);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  storeScanResults,
  getAllScanResults,
};
