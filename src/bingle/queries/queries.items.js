const getItems = "SELECT * FROM items";
const getItemsById = "SELECT * FROM items WHERE id_product = $1";
const addItems = "INSERT INTO items (product, price) VALUES ($1, $2)";
const checkProductExists = "SELECT s FROM items s WHERE s.product = $1";
const removeItems = "DELETE FROM items WHERE id_product = $1";
const updateItems = "UPDATE items SET product = $1 WHERE id_product = $2";
const updateItemsPrice = "UPDATE items SET price = $1 WHERE id_product = $2";


module.exports = {
    getItems,
    getItemsById,
    addItems,
    checkProductExists,
    removeItems,
    updateItems,
    updateItemsPrice
}