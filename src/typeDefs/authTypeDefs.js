const {gql} = require('apollo-server');
const authTypes = gql `
    type Tokens {
        refresh : String!
        access: String!
    }

    type Access {
        access: String!
    }

    type CredentialInput {
        email: String!
        password: String!
    }

    type SignUpInput {
        email: String!
        password: String!
        name: String!
        last_name: String!
        department: String!
        city: String!
        address: String!
        address_complement: String!
        postal_code: String!
        num_changed_books: String!
    }

    type UserDetail {
        id: Int!
        name: String!
        last_name: String!
        email: String!
        department: String!
        city: String!
        address: String!
        address_complement: String!
        postal_code: String!
        num_changed_books: String!
    }

    extend type Query {
        userDataById(userId: Int) : UserDetail!
    }

    extend type Mutations {
        signUpUser(userInput : SignUpInput) : Tokens!
        logIn(credentials: CredentialsInput!) : Tokens!
        refreshToken(refresh: String!) : Access!
    }
`;
module.exports = authTypes;