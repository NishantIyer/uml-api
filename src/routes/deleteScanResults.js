// routes/deleteScanResults.js

const express = require('express');
const router = express.Router();
const ScanResult = require('../models/scanResult');

// DELETE all scan results
router.delete('/', async (req, res, next) => {
  try {
    // Delete all documents from the "scanresults" collection
    await ScanResult.deleteMany();

    res.status(200).json({ message: 'All scan results deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

module.exports = router;
