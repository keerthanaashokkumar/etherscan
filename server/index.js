require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const SIM_API_BASE = 'https://api.sim.dune.com'; 
const fetchFromSimApi = async (endpoint) => {
  try {
    const response = await axios.get(`${SIM_API_BASE}${endpoint}`, {
      headers: {
        'X-Sim-Api-Key': process.env.SIM_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error(`SIM API error at ${endpoint}:`, error.response?.data || error.message);
    throw new Error('Failed to fetch data from SIM API');
  }
};

app.get('/api/blocks', async (req, res) => {
  try {
    const data = await fetchFromSimApi('/v1/evm/activity/0xd8da6bf26964af9d7eed9e03e53415d37aa96045'); 
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/api/transactions', async (req, res) => {
  try {
    const data = await fetchFromSimApi('/v1/evm/transactions/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'); 
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
