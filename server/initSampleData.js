// Optional: script to add sample products to the MongoDB database.
// Usage: set MONGO_URI then run `node initSampleData.js`

const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const sampleProducts = [
  { name: 'Red Summer Dress', price: 49.99, image: 'https://images.unsplash.com/photo-1520975924741-6ef3d5c6a3a8?auto=format&fit=crop&w=800&q=60' },
  { name: 'Blue Casual Dress', price: 39.99, image: 'https://images.unsplash.com/photo-1520975911010-0d5f6f2f4b4b?auto=format&fit=crop&w=800&q=60' },
  { name: 'Floral Maxi', price: 59.99, image: 'https://images.unsplash.com/photo-1503342452485-86f7f03e7b76?auto=format&fit=crop&w=800&q=60' },
  { name: 'Green Wrap Dress', price: 45.0, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60' },
  { name: 'Yellow Sundress', price: 34.5, image: 'https://images.unsplash.com/photo-1495121605193-b116b5b09a6d?auto=format&fit=crop&w=800&q=60' },
  { name: 'Elegant Black Dress', price: 79.99, image: 'https://images.unsplash.com/photo-1541529086526-c9b7f2b4b0e5?auto=format&fit=crop&w=800&q=60' }
];

const MONGO_URI = process.env.MONGO_URI || 'your-mongo-uri-here';

mongoConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB');
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log('Inserted sample products');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

mongoConnect();
