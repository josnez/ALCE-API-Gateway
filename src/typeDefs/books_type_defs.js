const { gql } = require('apollo-server');

const bookTypeDefs = gql `
    type Book {
        id: Int!
        tittle: String!
        author: String!
        editorial: String!
        genre: String!
        year: String!
        physicalState:String!
        edition: String!
        language: String!
        idOwner: Int!
        idAplicant: Int!
        lastChange: String!
        requested: Boolean!
    }
    
    extend type Query {
        bookByIdOwner(idOwner: Int!): Book
    }
`;

module.exports = bookTypeDefs;