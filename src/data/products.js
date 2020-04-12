const products = [
    {
        id: 1,
        name: "Producto 1",
    },
    {
        id: 2,
        name: "Producto 2",
    },
    {
        id: 3,
        name: "Producto 3",
    },
    {
        id: 4,
        name: "Producto 4",
    },
    {
        id: 5,
        name: "Producto 5",
    },
];

const products_get_one = (id) => {
    return products.filter((product) => product.id === id)[0];
};

const all_products = () => {
    return products;
};

module.exports = {
    products_get_one,
    all_products,
};
