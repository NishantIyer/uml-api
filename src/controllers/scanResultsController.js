const ScanResult = require('../models/scanResult');

// Store scan results
exports.storeScanResults = async (req, res, next) => {
  try {
    const scanResult = new ScanResult(req.body);
    await scanResult.save();
    res.status(201).json(scanResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

// Fetch all scan results in descending order of createdAt
exports.getAllScanResults = async (req, res, next) => {
  try {
    const allScanResults = await ScanResult.find().sort({ createdAt: -1 });
    res.status(200).json(allScanResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};
