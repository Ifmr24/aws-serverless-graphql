const { gql } = require("apollo-server-lambda");
const resolvers = require("./resolvers");

const typeDefs = gql`
    extend type Query {
        getCat: String
    }
`;

module.exports = {
    typeDefs: [typeDefs],
    resolvers,
};
