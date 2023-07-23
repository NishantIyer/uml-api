// controllers/scanResultsController.js

const ScanResult = require('../models/scanResult');

// Function to store scan results
const storeScanResults = async (req, res) => {
  try {
    const scanResultData = req.body; // Assuming the POST request sends the scan result data as a JSON object

    // Delete all previous scan results before saving the new one
    await ScanResult.deleteMany({});

    const scanResult = new ScanResult(scanResultData);
    await scanResult.save();

    // Fetch all scan results after the new one is saved
    const allScanResults = await ScanResult.find();

    res.status(200).json({ message: 'Scan results received and updated successfully', allScanResults });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save scan results' });
  }
};

// Function to fetch all scan results
const getAllScanResults = async (req, res) => {
  try {
    const allScanResults = await ScanResult.find();
    res.status(200).json(allScanResults);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch scan results' });
  }
};

module.exports = {
  storeScanResults,
  getAllScanResults,
};
