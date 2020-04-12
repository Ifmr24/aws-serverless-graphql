const { gql } = require("apollo-server-lambda");
const resolvers = require("./resolvers");

const typeDefs = gql`
    type Product {
        id: Int
        name: String
    }
    extend type Query {
        product(id: Int!): Product
        products: [Product]
    }
`;

module.exports = {
    typeDefs: [typeDefs],
    resolvers,
};
