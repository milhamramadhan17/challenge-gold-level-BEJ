const getOrders = "SELECT * FROM orders";
const getOrdersById = "SELECT * FROM orders WHERE id = $1";
const addOrder = "INSERT INTO  orders (id_users, id_items, total_order) VALUES ($1, $2, $3)";
const removeOrder = "DELETE FROM orders WHERE id = $1";
const updateOrder = "UPDATE orders SET id_items = $1 WHERE id = $2";
const updateOrderValue = "UPDATE orders SET total_order = $1 WHERE id = $2";


module.exports = {
    getOrders,
    getOrdersById,
    addOrder,
    removeOrder,
    updateOrder,
    updateOrderValue,


}