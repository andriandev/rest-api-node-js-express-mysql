const express = require('express');
const Controller = require('../controllers/Autoload.js');

const router = express.Router();

router.get('/', Controller.Product.getAllProducts);
router.get('/page/:page', Controller.Product.getAllProducts);
router.get('/:id', Controller.Product.getProductById);
router.post('/', Controller.Product.createdProducts);
router.put('/:id', Controller.Product.updateProduct);
router.delete('/:id', Controller.Product.deleteProduct);

module.exports = router;