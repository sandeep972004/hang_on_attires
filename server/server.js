const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('API working');
});

app.use('/api/products', productsRouter);

// Connect to MongoDB Atlas (placeholder URI in .env)
const MONGO_URI = process.env.MONGO_URI || 'your-mongo-uri-here';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    // Still start server (useful for frontend development)
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (no DB)`));
  });
