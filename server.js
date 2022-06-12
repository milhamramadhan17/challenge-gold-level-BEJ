const express = require('express');
const usersRoutes = require('./src/bingle/route/route.users');
const itemsRoutes = require('./src/bingle/route/route.items');
const ordersRoutes = require('./src/bingle/route/route.orders');

const app = express();
const port = 3000;

// middleware

const longger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
}

app.use(longger);

app.use(express.json());

app.get("/test", (req,res) => {
    res.send("Hellow World!");
})

app.use('/api/v1/user', usersRoutes);
app.use('/api/v1/item', itemsRoutes);
app.use('/api/v1/order', ordersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app;

