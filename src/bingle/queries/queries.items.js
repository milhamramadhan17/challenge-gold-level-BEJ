const getItems = "SELECT * FROM items";
const getItemsById = "SELECT * FROM items WHERE id = $1";

module.exports = {
    getItems,
    getItemsById
}