const express = require('express');
const { getAllProducts, createdProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/Product.js');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/page/:page', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createdProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;