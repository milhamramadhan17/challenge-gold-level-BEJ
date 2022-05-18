const getOrders = "SELECT * FROM orders";
const getOrdersById = "SELECT * FROM orders WHERE id = $1";
// const checkItemsExists = "SELECT s FROM items s WHERE s.nama_items = $1";
const addOrder = "INSERT INTO  orders (items_orders, jumlah_orders) VALUES ($1, $2)";

module.exports = {
    getOrders,
    getOrdersById,
    addOrder,
    // checkItemsExists
}