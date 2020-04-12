const getCat = require("./getCat");

const resolvers = {
    Query: {
        getCat,
    },
};

module.exports = resolvers;
