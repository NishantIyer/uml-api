// src/services/scanResultService.js

const ScanResult = require('../models/scanResult');

// Function to save a scan result to the database
const saveScanResult = async (scanResultData) => {
  try {
    const scanResult = new ScanResult(scanResultData);
    const savedScanResult = await scanResult.save();
    return savedScanResult;
  } catch (error) {
    console.error('Error saving scan result:', error);
    throw error;
  }
};

// Function to fetch all scan results from the database
const getAllScanResults = async () => {
  try {
    const scanResults = await ScanResult.find();
    return scanResults;
  } catch (error) {
    console.error('Error fetching scan results:', error);
    throw error;
  }
};

module.exports = {
  saveScanResult,
  getAllScanResults,
};
