const { ApolloServer } = require('apollo-server');

const typeDefs       = require('./typeDefs');
const resolvers      = require('./resolvers');
const authentication = require('./utils/authentication');
const AuthAPI        = require('./dataSources/authAPI');
const BookAPI        = require('./dataSources/bookAPI');
const ExchangeAPI    = require('./dataSources/exchangeAPI');

const server         = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    desaSources : () => ({
        authAPI     : new AuthAPI(),
        bookAPI     : new BookAPI(),
        exchangeAPI : new ExchangeAPI()
    }),
    introspection: true,
    playground: true
});

server.listen( procces.env.PORT || 4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});