const pool = require('../db');
const queriesUsers = require('./queries/queries.users')
const queriesItems = require('./queries/queries.items')
const queriesOrders = require('./queries/queries.orders')

//user
const getUsers = (req, res) => {
    pool.query(queriesUsers.getUsers, (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);

    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queriesUsers.getUsersById, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};

const addUsers = (req, res) => {
    const {username, email} = req.body;

    // chech if email exists
    pool.query(queriesUsers.checkEmailExists, [email], (err, results) => {
        if (results.rows.length) {
            res.send('Email already exists.');
        }

        //add users to database
        pool.query(queriesUsers.addUsers,
            [username, email], (err, results) => {
            if (err) throw err;
            res.status(201).send("User Created Successfully!");
        })
    });
};





//items
const getItems = (req, res) => {
    pool.query(queriesItems.getItems, (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);

    });
};

const getItemsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queriesItems.getItemsById, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};

const addItems = (req, res) => {
    const{nama_items, harga_items} = req.body;

    // chech if items exists
    pool.query(queriesItems.checkItemsExists, [nama_items], (err, results) => {
        if (results.rows.length) {
            res.send('Item already exists.');
        };

        //add users to database
        pool.query(queriesItems.addItems,
            [nama_items, harga_items], (err, results) => {
            if (err) throw err;
            res.status(201).send("User Created Successfully!");
        })
    });
};





//orders
const getOrders = (req, res) => {
    pool.query(queriesOrders.getOrders, (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);

    });
}

const getOrdersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queriesOrders.getOrdersById, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
    
}


const addOrder = (req, res) => {
    const{items_orders, jumlah_orders} = req.body;
    
    pool.query(queriesOrders.addOrder,
        [items_orders, jumlah_orders], (err, results) => {
        if (err) throw err;
        res.status(201).send("Order Created Successfully!");
        })
}

module.exports = {
    getUsers,
    addUsers,
    getUsersById,
    getItems,
    getItemsById,
    addItems,
    getOrders,
    getOrdersById,
    addOrder,
}
