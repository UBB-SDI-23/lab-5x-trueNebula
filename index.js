const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://trueNebula:aaaa@mpplab.c1bav1a.mongodb.net/MppLab?retryWrites=true&w=majority";

mongoose.connect(uri);

const app = express();
const port = process.env.PORT || 80;
app.use(express.json());

const ProductRouter = require('./routes/ProductRouter');
const ProductListRouter = require('./routes/ProductListRouter');
const ClientRouter = require('./routes/ClientRouter');
const PurchaseRouter = require('./routes/PurchaseRouter');
app.use('/api', ProductRouter);
app.use('/api', ProductListRouter);
app.use('/api', ClientRouter);
app.use('/api', PurchaseRouter);

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}', port);

});

app.get('/test', (req, res) => {
    res.sendFile('./views/test.html', { root: __dirname });
});