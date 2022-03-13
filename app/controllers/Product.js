const Product = require('../models/ProductModels.js');

exports.getAllProducts = async (req, res) => {
    try {
        const limit = 5;
        const page = Number(req.params.page) || 1;
        const offset = (page-1) * limit;
        const totalProduct = await Product.count();
        const totalPage = Math.ceil(totalProduct/limit);
        const products = await Product.findAll({
            limit: limit,
            offset: offset
        });
        res.json({
            page: page,
            totalProduct: totalProduct,
            totalPage: totalPage,
            product: products
        });
    } catch (e) {
        res.json({
            message: e.message
        });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (e) {
        res.json({
            message: e.message
        });
    }
};

exports.createdProducts = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (e) {
        res.json({
            message: e.message
        });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (e) {
        res.json({
            message: e.message
        });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (e) {
        res.json({
            message: e.message
        });
    }
};
