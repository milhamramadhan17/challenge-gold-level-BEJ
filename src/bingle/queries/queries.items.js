const getItems = "SELECT * FROM items";
const getItemsById = "SELECT * FROM items WHERE id = $1";
const addItems = "INSERT INTO  items (nama_items, harga_items) VALUES ($1, $2)"

module.exports = {
    getItems,
    getItemsById,
    addItems

}