const { gql } = require("apollo-server-lambda");
const resolvers = require("./resolvers");

const typeDefs = gql`
    extend type Query {
        hello(name: String!): String
    }
`;

module.exports = {
    typeDefs: [typeDefs],
    resolvers,
};
