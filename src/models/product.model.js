const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0, // Default stock value if not provided
  },
  quantity: {
    type: Number,
    default: 0, // Default quantity value if not provided
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
