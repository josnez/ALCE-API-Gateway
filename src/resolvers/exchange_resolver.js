const exchangeResolver = {
    Query: {
        exchangeByIdOwner: async(_, { idOwner }, { dataSources, userIdToken }) => {
            Token = (await dataSources.authAPI.getUser(userIdToken)).idOwner
            if (idOwner == Token)
                return dataSources.exchangeAPI.exchangeByIdOwner(idOwner)
            else
                return null
        }
    },
    Mutation: {
        createExchange: async(_, { exchange }, { dataSources, userIdToken }) => {
            Token = (await dataSources.authAPI.getUser(userIdToken)).exchange
            if (exchange.idOwner == Token)
                return dataSources.exchangeAPI.createExchange(exchange)
            else
                return null
        }
    }
};
module.exports = exchangeResolver;