const ProductModel = require('../models/Product');

class ProductService {
    async getProducts() {
        try {
            const products = await ProductModel.find();
            return products;
        }

        catch (err) {
            throw err;
        }

    }

    async createProduct(newProduct) {
        try {
            const product = new ProductModel({
                name: newProduct.name,
                price: newProduct.price,
                description: newProduct.description,
                quantity: newProduct.quantity,
                category: newProduct.category
            });

            await product.save();
            return product;
        }

        catch (err) {
            throw err;
        }

    }

    async getProductById(id) {
        try {
            const product = await ProductModel.findById(id);
            return product;
        }

        catch (err) {
            throw err;
        }

    }

    async updateProductById(id, newProduct) {
        try {
            const product = await ProductModel.findByIdAndUpdate(id, newProduct, { new: true });
            return product;
        }

        catch (err) {
            throw err;
        }

    }

    async deleteProductById(id) {
        try {
            const product = await ProductModel.findByIdAndDelete(id);
            return product;
        }

        catch (err) {
            throw err;
        }

    }

    async getProductsByName(name) {
        try {
            const products = await ProductModel.find();
            const product = products.filter(product => product.name === name);
            return product;
        }

        catch (err) {
            throw err;
        }

    }

    async filterProductByPrice(price) {
        try {
            const products = ProductModel.find({ price: { $gt: price } });
            return products;
        }

        catch (err) {
            throw err;

        }

    }

}

module.exports = ProductService;