const { makeExecutableSchema, gql } = require("apollo-server-lambda");
const deepmerge = require("deepmerge");

const globalTypeDefs = gql`
    type Query
`;

const makeExecutablesSchemasFromModules = ({ modules }) => {
    let typeDefs = [globalTypeDefs];
    let resolvers = [];

    modules.forEach((module) => {
        typeDefs = [...typeDefs, ...module.typeDefs];
        resolvers = deepmerge(resolvers, module.resolvers);
    });

    return makeExecutableSchema({
        typeDefs,
        resolvers,
    });
};

module.exports = { makeExecutablesSchemasFromModules };
