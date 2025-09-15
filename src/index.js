// PixelKale - KaleCraft Main Entry Point
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: '🌱 Welcome to PixelKale - KaleCraft!',
    version: '1.0.0',
    description: 'The first immersive blockchain agriculture experience on Stellar',
    features: [
      'Real blockchain farming with KALE tokens',
      'Pixel art interface with day/night themes',
      'Proof-of-work mining mechanics',
      'Stellar blockchain integration'
    ],
    endpoints: {
      health: '/health',
      farm: '/farm',
      blockchain: '/blockchain'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

app.get('/farm', (req, res) => {
  res.json({
    message: '🌾 KALE Farm Integration',
    contract: {
      testnet: 'CDSWUUXGPWDZG76ISK6SUCVPZJMD5YUV66J2FXFXFGDX25XKZJIEITAO',
      mainnet: 'CDL74RF5BLYR2YBLCCI7F5FB6TPSCLKEJUBSD2RSVWZ4YHF3VMFAIGWA'
    },
    functions: ['plant', 'work', 'harvest']
  });
});

app.get('/blockchain', (req, res) => {
  res.json({
    network: 'Stellar',
    smartContracts: 'Soroban',
    token: 'KALE',
    farming: 'Proof-of-Teamwork'
  });
});

// Start server
app.listen(PORT, () => {
  console.log('🌱 PixelKale - KaleCraft Server Started!');
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
  console.log('🎮 Ready for blockchain farming!');
});

module.exports = app;
