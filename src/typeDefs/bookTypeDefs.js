const {gql} = require('apollo-server');

const bookTypeDefs = gql`
    type Book {
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
        infoBookById(id: String!)      : InfoBook
        booksUserByIdOwner(id: Int!)   : [Book]
        requestedBooksbyIdApplicant(id: Int) : [Book]
        booksFiltered(filter: String!) : [Book]
        allBooks()                      : [Book]
    }

    extend type Mutation {
        editBook(details: EditBookDetails!)  : Book!
        deleteBook(id: String!)             : Book!
    }
`;
module.exports = bookTypeDefs;
