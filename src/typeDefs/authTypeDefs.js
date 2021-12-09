const {gql} = require('apollo-server');

const authTypeDefs = gql`
    type Tokens{
        refresh:   String!
        access:   String!
    }

    type Access{
        access:   String!
    }

    input CredentialsInput {
        email:   String!
        password:   String!
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
        email: String! 
        name: String!
        last_name: String!
        department: String!
        city: String!
        address: String!
        address_complement: String! 
        postal_code: String! 
    }

    input UserUpdate {
        id: Int!
        name: String!
        last_name: String!
        department: String!
        city: String!
        address: String!
        address_complement: String! 
        postal_code: String! 
    }

    type Query {
        userDetailById(userId: Int!) : UserDetail!
    }

    type Mutation {
        signUpUser(userInput: SignUpInput)     : Tokens!
        logIn(credentials: CredentiaslInput!)   : Tokens!
        refreshToken(refresh: String!)          : Access!
        updateUser(userInput: UserUpdate!)      : UserDetail!
        deleteUsedr(userId: Int!)               : String!
    }


`;
module.exports = authTypeDefs;
