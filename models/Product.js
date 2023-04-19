const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    quantity: Number,
    category: String,
    list: {
        type: Schema.Types.ObjectId,
        ref: "ProductList"
    },
    purchases: [{
        type:Schema.Types.ObjectId,
        ref: "Purchase"
    }]
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
