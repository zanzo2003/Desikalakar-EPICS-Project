import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModels.js';
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    console.log(products)
    res.json(products);
});

// @desc    Fetch a product
// @route   GET /api/products
// @access  Public

const getProductById = asyncHandler(async (req, res) => {
    console.log(req.params.id);
    const product = await Product.findById(req.params.id);

    if (product){
        return res.json(product);
    } else{
        res.status(404);
        throw new Error('Product not found');
    }
});

export  {getProducts, getProductById};