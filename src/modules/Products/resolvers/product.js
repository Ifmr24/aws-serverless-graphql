const { products_get_one } = require("../../../data/products");
const product = (root, { id }) => products_get_one(id);
module.exports = product;
