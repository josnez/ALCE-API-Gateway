const { gql } = require('apollo-server');

const exchangeTypeDefs = gql `
    type Exchange {
        id: String
        idBook: String!
        idOwner: String!
        idAplicant: String!
        date: String!
        state: String!
    }

    type ExchangeNotification {
        id: String
        idExchange: String!
        date: String!
        title: String!
        message: String!
    }
    
    input ExchangeInput {
        id: String!
        idBook: String!
        idOwner: Int!
        idAplicant: Int!
        date: String!
        state: String!
    }

    input ExchangeNotificationInput {
        id: String
        idExchange: String!
        date: String!
        title: String!
        message: String!
    }

    extend type Query {
        exchangeByIdOwner(idOwner: String!): [Exchange]
        exchangeById(id: String!) : Exchange!
    }

    extend type Mutation {
        createExchange(exchange: ExchangeInput): Exchange!
        updateExchange(exchange: ExchangeInput): Exchange!
        deleteExchange(exchange: ExchangeInput): Exchange!
        createExchangeNotification(exchangeNotification: ExchangeNotificationInput) : ExchangeNotification
    }
`;
module.exports = exchangeTypeDefs;
