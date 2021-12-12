const { gql } = require('apollo-server');

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }
 
    type Access {
        access: String!
    }

    input Refresh {
        refresh: String!
    }
    
    input CredentialsInput {
        email: String!
        password: String!
    }
 
    input SignUpInput {
        email: String!
        password: String!
        name: String!
        last_name: String!
        department: String!
        city: String!
        address: String!
        address_complement: String!
        postal_code: String!
    }
    
    type UserDetail {
        id: Int!
        name: String!
        last_name: String!
        email: String!
        department: String!
        city: String!
        address: String!
        adrress_complement: String!
        postal_code: String!
        num_changed_books: Int!
    }

    input UserUpdate {
        email: String
        password: String
        name: String
        last_name: String
        department: String
        city: String
        address: String
        address_complement: String
        postal_code: String
    }
    
    type Query {
        userDetailById(userId: Int!) : UserDetail!
    }

    type Mutation {
        signUpUser(userInput: SignUpInput)              : Tokens!
        logIn(credentials: CredentialsInput!)           : Tokens!
        refreshToken(refresh: String!)                  : Access!
        updateUser(userId: Int!, userInput: UserUpdate!) : UserDetail!
        deleteUser(userId: Int!)                        : String!
    }
`;
module.exports = authTypeDefs;