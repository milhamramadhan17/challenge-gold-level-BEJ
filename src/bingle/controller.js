const pool = require('../db');
const queriesUsers = require('./queries/queries.users')
const queriesItems = require('./queries/queries.items')
const queriesOrders = require('./queries/queries.orders');

//user
const getUsers = (req, res) => {
    pool.query(queriesUsers.getUsers, (err, results) => {
        if(err) throw err;
        return res.status(200).json(results.rows);

    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queriesUsers.getUsersById, [id], (err, results) => {
        if (err) throw err;
        return res.status(200).json(results.rows);
    });
};

const addUsers = (req, res) => {
    const {username, email} = req.body;

    // chech if email exists
    pool.query(queriesUsers.checkEmailExists, [email], (err, results) => {
        if (results.rows.length) {
            return res.send('Email already exists.');
        }

        //add users to database
        pool.query(queriesUsers.addUsers,
            [username, email], (err, results) => {
                if (err) throw err;
                return res.status(201).send("User Created Successfully!");
            })
        });
};
        
const removeUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queriesUsers.getUsersById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        console.log(noUserFound);
        if(noUserFound) {
            return res.send("User does not exist in the database!");
        };

        
        pool.query(queriesUsers.removeUser,
            [id], (err, results) => {
            if (err) throw err; 
            return res.status(203).send("User removed successfully.");
            
        });
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const {username} = req.body;

    pool.query(queriesUsers.getUsersById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            return res.send("User does not exist in database!");
        };

        pool.query(queriesUsers.updateUser, [username, id], (err, results) => {
            if (err) throw err;
            return res.status(200).send("User updated successfully.");
        });
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

const removeItems = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queriesItems.getItemsById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        console.log(noUserFound);
        if(noUserFound) {
            return res.send("Item does not exist in the database!");
        };

        
        pool.query(queriesItems.removeItems,
            [id], (err, results) => {
            if (err) throw err; 
            return res.status(203).send("User removed successfully.");
            
        });
    });

};

const updateItems = (req, res) => {
    const id = parseInt(req.params.id);
    const {nama_items} = req.body;
    const {harga_items} = req.body;

    pool.query(queriesItems.getItemsById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        console.log(noUserFound);
        if(noUserFound) {
            return res.send("Item doest not exist in the database!");
        }
        if (nama_items){
            pool.query(queriesItems.updateItems, [nama_items, id], (err, results) => {
                if(err) throw err;
                return res.status(200).send("Item updated successfully :D");
            });
        } else if(harga_items){
            pool.query(queriesItems.updateItemsPrice, [harga_items, id], (err, results) => {
                if(err) throw err;
                return res.status(200).send("Price updated successfully :D");
            });
        }

        


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
    updateUser,
    removeUser,

    getItems,
    getItemsById,
    addItems,
    removeItems,
    updateItems,

    getOrders,
    getOrdersById,
    addOrder,
}
