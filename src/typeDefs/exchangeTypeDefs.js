const {gql} = require('apollo-server');

const exchangeTypeDefs = gql`
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

    extend type Query {
        exchangeById(id: String!) : Exchange!
    }

    extend type Mutation {
        createExchange(exchange: Exchange): Exchange!
        updateExchange(exchange: Exchange): Exchange!
        deleteExchange(exchange: Exchange): Exchange!
        createExchangeNotification(exchangeNotification: ExchangeNotification) : ExchangeNotification
    }
`;

module.exports = exchangeTypeDefs;