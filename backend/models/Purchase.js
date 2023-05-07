const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PurchaseSchema = new mongoose.Schema({
    date: Date,
    received: Boolean,
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
    
});

const Purchase = mongoose.model('Purchase', PurchaseSchema);

module.exports = Purchase;
