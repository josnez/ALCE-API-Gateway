const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ExchangeAPI = require('./dataSources/exchange_api');
const BookAPI = require('./dataSources/books_api');
const AuthAPI = require('./dataSources/auth_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        exchangeAPI: new ExchangeAPI(),
        bookAPI: new BookAPI(),
        authAPI: new AuthAPI(),
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
