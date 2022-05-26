const getItems = "SELECT * FROM items";
const getItemsById = "SELECT * FROM items WHERE id = $1";
const addItems = "INSERT INTO  items (nama_items, harga_items) VALUES ($1, $2)";
const removeItems = "DELETE FROM items WHERE id = $1";
const updateItems = "UPDATE items SET nama_items = $1 WHERE id = $2";
const updateItemsPrice = "UPDATE items SET harga_items = $1 WHERE id = $2";


module.exports = {
    getItems,
    getItemsById,
    addItems,
    removeItems,
    updateItems,
    updateItemsPrice



}