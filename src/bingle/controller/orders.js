const pool = require('../../db');
const queriesOrders = require('../queries/queries.orders');



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
    const{id_users, id_items, total_order, total_price} = req.body;
    
    pool.query(queriesOrders.addOrder,
        [id_users, id_items, total_order], (err, results) => {
        if (err) throw err;
        res.status(201).send("Order Created Successfully!");
        })
}

const removeOrder = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queriesOrders.getOrdersById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        console.log(noUserFound);
        if(noUserFound) {
            return res.send("Order does not exist in the database!");
        };

        
        pool.query(queriesOrders.removeOrder,
            [id], (err, results) => {
            if (err) throw err; 
            return res.status(203).send("Order removed successfully.");
            
        });
    });

}

const updateOrder = (req, res) => {
    const id = parseInt(req.params.id);
    const {id_items} = req.body;
    const {total_order} = req.body;

    pool.query(queriesOrders.getOrdersById, [id], (err, results) => {
        const noUserFound = !results.rows.length;
        console.log(noUserFound);
        if(noUserFound) {
            return res.send("Item doest not exist in the database!");
        }
        if (id_items){
            pool.query(queriesOrders.updateOrder, [id_items, id], (err, results) => {
                if(err) throw err;
                return res.status(200).send("Order updated successfully :D");
            });
        } else if(total_order){
            pool.query(queriesOrders.updateOrderValue, [total_order, id], (err, results) => {
                if(err) throw err;
                return res.status(200).send("Value order updated successfully :D");
            });
        }
    });
}



module.exports = {
    getOrders,
    getOrdersById,
    addOrder,
    removeOrder,
    updateOrder,
}