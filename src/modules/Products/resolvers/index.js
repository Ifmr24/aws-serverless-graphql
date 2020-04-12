const product = require("./product");
const products = require("./products");
const resolvers = {
    Query: {
        product,
        products,
    },
};

module.exports = resolvers;
