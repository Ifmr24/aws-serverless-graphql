const { makeExecutablesSchemasFromModules } = require("../utils/modules");
const Hellos = require("./Hello");
const Cats = require("./Cats");

module.exports = makeExecutablesSchemasFromModules({
    modules: [Hellos, Cats],
});
