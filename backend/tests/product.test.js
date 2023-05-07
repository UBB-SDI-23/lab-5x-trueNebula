const ProductModel = require('../models/Product');
const ProductService = require('../services/ProductService');
const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/lab1';

beforeEach(async () => {
    mongoose.connect(mongoURI);
    const productService = new ProductService();
    const product = new ProductModel({
        name: "Test",
        price: 2001,
        description: "Test",
        category: "Test",
    });

    productService.createProduct(product);

});

afterEach(async () => {
    const productService = new ProductService();
    const expectedProduct = await productService.getProductsByName("Test");

    productService.deleteProductById(expectedProduct);

});

test('Testing filterProductByPrice', async () => {
    const productService = new ProductService();
    const filteredProduct = await productService.filterProductByPrice(2000);
    const expectedProduct = await productService.getProductsByName("Test");

    expect(filteredProduct).toStrictEqual(expectedProduct);

});