const getOrders = "SELECT * FROM orders";
const getOrdersById = "SELECT * FROM orders WHERE id = $1";
const addOrder = "INSERT INTO  orders (items_orders, jumlah_orders) VALUES ($1, $2)";

module.exports = {
    getOrders,
    getOrdersById,
    addOrder,
}