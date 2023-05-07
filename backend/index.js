const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://trueNebula:aaaaa@mpplab.c1bav1a.mongodb.net/?retryWrites=true&w=majority";

async function dbConnect() {
    try{
        await mongoose.connect(uri);
        console.log(mongoose.connection.readyState);
    } finally {
        mongoose.connection.close();
    }
}

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
dbConnect();

const ProductRouter = require('./routes/ProductRouter');
const ProductListRouter = require('./routes/ProductListRouter');
const ClientRouter = require('./routes/ClientRouter');
const PurchaseRouter = require('./routes/PurchaseRouter');
app.use('/api', ProductRouter);
app.use('/api', ProductListRouter);
app.use('/api', ClientRouter);
app.use('/api', PurchaseRouter);

app.listen(port, () => {
    console.log('Server running at on port ' + port);

});

app.get('/test', (req, res) => {
    res.sendFile('./views/test.html', { root: __dirname });
});

app.get('/test2', (req, res) => {
    res.send({data: "test2"});
});