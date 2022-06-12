const getOrders = "SELECT * FROM orders";
const getOrdersById = "SELECT * FROM orders WHERE id_order = $1";
const checkId_ProductNId_UsersExists = "SELECT s FROM orders s WHERE (s.id_users, s.id_product) = ($1, $2)";
const addOrder = "INSERT INTO orders (total_order ,id_users, id_product) VALUES ($1, $2, $3)";
const removeOrder = "DELETE FROM orders WHERE id_order = $1";
const updateOrder = "UPDATE orders SET id_product = $1 WHERE id_order = $2";
const updateOrderValue = "UPDATE orders SET total_order = $1 WHERE id_order = $2";


module.exports = {
    getOrders,
    getOrdersById,
    addOrder,
    removeOrder,
    updateOrder,
    updateOrderValue,
    checkId_ProductNId_UsersExists
}