const { gql } = require('apollo-server');

const bookTypeDefs = gql `
    type Book {
        id: String!
        title: String!
        author: String!
        editorial: String!
        genre: String!
        year: String!
        physicalState:String!
        edition: String!
        state: String
        language: String!
        idOwner: Int!
        idAplicant: Int
        requested: Boolean
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

    input InputBook {
      title: String!
      author: String!
      editorial: String!
      genre: String!
      year: String!
      physicalState: String!
      edition: String!
      language: String!
      idOwner: Int!
      idAplicant: Int
      requested: Boolean
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
        infoBookById(bookId: String!)        : Book!
        booksByIdOwner(userId: Int!)         : [Book]
        booksByIdAplicant(idAplicant: Int!)  : [Book]
        booksFiltered(filter: String!)       : [Book]
        allBooks                             : [Book]
    }

    extend type Mutation {
        editBook(bookInput: EditBookDetails!): Book!
        deleteBook(bookId: String!): String!
        createBook(bookInput: InputBook!): Book!        
    }
`;

module.exports = bookTypeDefs;
