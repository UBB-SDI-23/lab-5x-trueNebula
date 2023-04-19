const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVIP: Boolean,
    email: {
        type: String,
        required: true
    },
    dateJoined: Date,
    purchases: [{
        type: Schema.Types.ObjectId,
        ref: "Purchase"
    }]
});

const pClient = mongoose.model('Client', ClientSchema);

module.exports = Client;
