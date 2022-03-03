const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');

const app = express();
app.use(cors());

//import endpoint diletakkan di sini
const admin = require('./routes/admin');
app.use("/admin", admin);

const customer = require('./routes/customer');
app.use("/customer", customer);

const product = require('./routes/product');
app.use("/product", product);

//endpoint transaksi
const transaksi = require('./routes/transaksi');
app.use("/transaksi", transaksi);

//run server
app.listen(8080, () => {
    console.log('server run on port 8080');
})