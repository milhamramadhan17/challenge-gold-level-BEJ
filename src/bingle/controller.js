const pool = require('../db');

const getUsers = (req, res) => {
    pool.query("SELECT * FROM users", (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);

    })
}

const getItems = (req, res) => {
    pool.query("SELECT * FROM items", (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);

    })
}

const getOrders = (req, res) => {
    pool.query("SELECT * FROM orders", (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);

    })
}

module.exports = {
    getUsers,
    getItems,
    getOrders
}