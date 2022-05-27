const getOrders = "SELECT * FROM orders";
const getOrdersById = "SELECT * FROM orders WHERE id = $1";
const addOrder = "INSERT INTO  orders (items_orders, jumlah_orders) VALUES ($1, $2)";
const removeOrder = "DELETE FROM orders WHERE id = $1";
const updateOrder = "UPDATE orders SET items_orders = $1 WHERE id = $2";
const updateOrderValue = "UPDATE orders SET jumlah_orders = $1 WHERE id = $2";


module.exports = {
    getOrders,
    getOrdersById,
    addOrder,
    removeOrder,
    updateOrder,
    updateOrderValue,


}