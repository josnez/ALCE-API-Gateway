const { gql } = require('apollo-server');

const exchangeTypeDefs = gql `
    type Exchange {
        id: String!
        idBook: String!
        idOwner: Int!
        idAplicant: Int!
        date: String!
        state: String!
    }
    
    input ExchangeInput {
        id: String!
        idBook: String!
        idOwner: Int!
        idAplicant: Int!
        date: String!
        state: String!
    }

    extend type Query {
        exchangeByIdOwner(idOwner: String!): [Exchange]
    }

    extend type Mutation {
        createExchange(exchange: ExchangeInput!): Exchange
    }
`;
module.exports = exchangeTypeDefs;
