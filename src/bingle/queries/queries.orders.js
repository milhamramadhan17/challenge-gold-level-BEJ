const getOrders = "SELECT * FROM orders";
const getOrdersById = "SELECT * FROM orders WHERE id = $1";

module.exports = {
    getOrders,
    getOrdersById
}