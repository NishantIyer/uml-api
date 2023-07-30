// controllers/scanResultsController.js
const ScanResult = require('../models/scanResult');
const axios = require('axios');

// Function to get geolocation data using the IP-geolocation API
async function getGeolocationData(ipAddress) {
  const options = {
    method: 'GET',
    url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
    params: {
      ip: ipAddress,
    },
    headers: {
      'X-RapidAPI-Key': 'dddca8c1c0msh3455be460cc0008p1341cejsnfcadc115fe4e',
      'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error getting geolocation data:', error);
    return null;
  }
}

// Store scan results
exports.storeScanResults = async (req, res, next) => {
  try {
    const scanResultData = req.body;

    // Get geolocation data for each network
    const scanResultsWithGeolocation = await Promise.all(
      scanResultData.map(async (network) => {
        const geolocationData = await getGeolocationData(network.ipAddress);

        // Combine the WiFi scan result with geolocation data
        return { ...network, geolocation: geolocationData };
      })
    );

    // Save the combined data to the database
    const savedScanResults = await ScanResult.insertMany(scanResultsWithGeolocation);

    res.status(201).json(savedScanResults);
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
