const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/test', (req, res) => {
    res.sendFile('./views/test.html', { root: __dirname });
});

app.get('/test2', (req, res) => {
    res.send({data: "test2"});
});