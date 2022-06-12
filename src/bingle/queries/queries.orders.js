const getOrders = "SELECT * FROM orders";
const getOrdersById = "SELECT * FROM orders WHERE id = $1";
const addOrder = "INSERT INTO  orders (total_order ,id_users, id_product) VALUES ($1, $2, $3)";
const removeOrder = "DELETE FROM orders WHERE id = $1";
const updateOrder = "UPDATE orders SET id_product = $1 WHERE id = $2";
const updateOrderValue = "UPDATE orders SET total_order = $1 WHERE id = $2";


module.exports = {
    getOrders,
    getOrdersById,
    addOrder,
    removeOrder,
    updateOrder,
    updateOrderValue,


}