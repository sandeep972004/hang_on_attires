const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Sample products (returned when DB is not available or for quick demo)
const sampleProducts = [
  {
    _id: '1',
    name: 'Red Summer Dress',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1520975924741-6ef3d5c6a3a8?auto=format&fit=crop&w=800&q=60'
  },
  {
    _id: '2',
    name: 'Blue Casual Dress',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1520975911010-0d5f6f2f4b4b?auto=format&fit=crop&w=800&q=60'
  },
  {
    _id: '3',
    name: 'Floral Maxi',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1503342452485-86f7f03e7b76?auto=format&fit=crop&w=800&q=60'
  },
  {
    _id: '4',
    name: 'Green Wrap Dress',
    price: 45.0,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60'
  },
  {
    _id: '5',
    name: 'Yellow Sundress',
    price: 34.5,
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b09a6d?auto=format&fit=crop&w=800&q=60'
  },
  {
    _id: '6',
    name: 'Elegant Black Dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1541529086526-c9b7f2b4b0e5?auto=format&fit=crop&w=800&q=60'
  }
];

// GET /api/products - return sample products or DB products
router.get('/', async (req, res) => {
  try {
    // Try to fetch from DB; fallback to sampleProducts
    const count = await Product.countDocuments();
    if (count > 0) {
      const products = await Product.find().limit(20);
      return res.json(products);
    }
    return res.json(sampleProducts);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    return res.json(sampleProducts);
  }
});

module.exports = router;
