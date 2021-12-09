const {gql} = require('apollo-server');
const bookTypes = gql `
    type Book {
        title : String!
        author : String!
        editorial : String!
        genre : String!
        year : String!
        physicalState : String!
        edition : String!
        state: String!
        language : String!
        idOwner : String
        idAplicant : String!
        requested : Boolean
    }

    type EditBookDetails {
        id : String!
        title : String!
        author : String!
        genre : String!
        year : String!
        physicalState : String
        edition : String!
        language : String!
        idAplicant : String!
        requested : String!
    }

    type InfoBook {
        id: String!
        title : String!
        author : String!
        editorial : String!
        genre : String!
        year : String!
        physicalState : String!
        edition : String!
        state: String!
        language : String!
        idOwner : String
        idAplicant : String!
        requested : Boolean
    }

    extend type Query {
        infoBookById(id : String!) : InfoBook
        booksUserByIdOwner(id : Int!) : [Book]
        booksUserByIdAplicant(id : Int) : [Book]
        booksFiltered(filter : String!) : [Book]
        allBooks() : [Book]
    }

    extend type Mutations {
        editBook(details: EditBookDetails!) : Book!
        deleteBook(id : String!) : Book!
    }
`;
module.exports = bookTypes;