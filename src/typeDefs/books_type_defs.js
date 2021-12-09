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
    
    input EditBookDetails {
      id: String!
      title: String!
      author: String!
      genre: String!
      year: String!
      physicalState: String!
      edition: String!
      language: String!
      idAplicant: Int!
      requested: Boolean!
    }

    type InfoBook {
        id: String!
        title: String!
        author: String!
        editorial: String!
        genre: String!
        year: String!
        physicalState: String!
        edition: String!
        state: String!
        language: String!
        idOwner: Int!
        idAplicant: Int!
        requested: Boolean!
    }

    extend type Query {
        bookByIdOwner(idOwner: Int!): [Book]
        infoBookById(id: String!)      : InfoBook
        booksUserByIdOwner(id: Int!)   : [Book]
        booksUserByIdAplicant(id: Int) : [Book]
        booksFiltered(filter: String!) : [Book]
    }

    extend type Mutation {
        editBook(book: EditBookDetails!): Book
        deleteBook(book: EditBookDetails!): Book
    }
`;

module.exports = bookTypeDefs;