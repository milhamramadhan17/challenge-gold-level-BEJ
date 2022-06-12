const pool = require('../../db');
const queriesItems = require('../queries/queries.items')



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
    const{product, price} = req.body;

    // chech if items exists
    pool.query(queriesItems.checkProductExists, [product], (err, results) => {
        if (results.rows.length) {
            return res.send('product already exists!.');
        };

        //add users to database
        pool.query(queriesItems.addItems,
            [product, price], (err, results) => {
            if(product && price){
                return res.status(201).send("Berhasil membuat daftar item :D");
            } else {
                return res.send("Lengkapi data dulu cok !!!")
            }
                
            
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
    const {product} = req.body;
    const {price} = req.body;

    pool.query(queriesItems.getItemsById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        console.log(noUserFound);
        if(noUserFound) {
            return res.send("Item doest not exist in the database!");
        }
        if (product){
            pool.query(queriesItems.updateItems, [product, id], (err, results) => {
                if(err) throw err;
                return res.status(200).send("Item updated successfully :D");
            });
        }
        if(price){
            pool.query(queriesItems.updateItemsPrice, [price, id], (err, results) => {
                if(err) throw err;
                return res.status(200).send("Price updated successfully :D");
            });
        }
    });
};

module.exports = {
    getItems,
    getItemsById,
    addItems,
    removeItems,
    updateItems
}