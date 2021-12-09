const bookResolver = {
    Query: {
        bookByIdOwner: async(_, { userId }, { dataSources, userIdToken }) => {
            userIdToken = (await dataSources.authAPI.getUser(userIdToken)).userId
            if (userId == userIdToken)
                return await dataSources.bookAPI.bookByIdOwner(userId)
            else
                return null
        },
    },
    Mutation: {}
};
module.exports = bookResolver;
    