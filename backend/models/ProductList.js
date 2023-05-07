const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductListSchema = new mongoose.Schema({
    name: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
});

const ProductList = mongoose.model('ProductList', ProductListSchema);

module.exports = ProductList;
