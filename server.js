const express = require('express');
const usersRoutes = require('./src/bingle/routes');
const itemsRoutes = require('./src/bingle/routes');
const ordersRoutes = require('./src/bingle/routes');

const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hellow World!");
})

app.use('/api/v1/users/', usersRoutes);
app.use('/api/v1/items/', itemsRoutes);
app.use('/api/v1/orders/', ordersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app;

