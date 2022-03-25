const express = require('express');
const Controller = require('../controllers/Autoload.js'); // Load semua controller

// Membuat variabel single controller
const Product = Controller.Product;

// System Routing
const router = express.Router();

router.get('/', Product.getAllProducts);
router.get('/page/:page', Product.getAllProducts);
router.get('/:id', Product.getProductById);
router.post('/', Product.createdProducts);
router.put('/:id', Product.updateProduct);
router.delete('/:id', Product.deleteProduct);

module.exports = router;