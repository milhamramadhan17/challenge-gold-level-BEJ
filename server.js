const express = require('express');
const usersRoutes = require('./src/bingle/route.users');
const itemsRoutes = require('./src/bingle/route.items');
const ordersRoutes = require('./src/bingle/route.orders');

const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Aku anak Indonesia!!!");
})

app.use('/api/v1/user', usersRoutes);
app.use('/api/v1/item', itemsRoutes);
app.use('/api/v1/order', ordersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app;

