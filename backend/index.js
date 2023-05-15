const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models/index.js');

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


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
