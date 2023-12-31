const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const passport = require('passport');

// Authentication middleware
const jwtAuthMiddleware = passport.authenticate('jwt', { session: false });

// Route to handle product listing with pagination, filtering, and sorting
router.get('/', productController.paginationFilteringSorting);

// Route to view individual product details
router.get('/:productId', productController.productId);
router.post('/add-product', productController.addProduct);

router.post('/add-to-cart', productController.addToCart);

// PUT endpoint to update product quantity in the cart
router.put('/update-cart/:productId', jwtAuthMiddleware, productController.updateCartProductId);

// PUT endpoint to update product quantity in the cart using a quantity endpoint
router.put('/update-quantity/:productId', jwtAuthMiddleware, productController.updateQuantityProductId);

router.get('/view-cart', jwtAuthMiddleware, productController.viewCart);

// DELETE endpoint to remove a product from the cart
router.delete('/remove-from-cart/:productId', jwtAuthMiddleware, productController.removeFromCartProductId);

module.exports = router;
