const { makeExecutableSchemaFromModules } = require("../utils/modules");
const Hellos = require("./Hello");
const Cats = require("./Cats");
const Products = require("./Products");

module.exports = makeExecutableSchemaFromModules({
    modules: [Hellos, Cats, Products],
});
