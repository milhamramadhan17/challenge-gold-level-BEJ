const getItems = "SELECT * FROM items";
const getItemsById = "SELECT * FROM items WHERE id = $1";
const checkItemsExists = "SELECT s FROM items s WHERE s.nama_items = $1";
const addItems = "INSERT INTO  items (nama_items, harga_items) VALUES ($1, $2)"

module.exports = {
    getItems,
    getItemsById,
    checkItemsExists,
    addItems

}