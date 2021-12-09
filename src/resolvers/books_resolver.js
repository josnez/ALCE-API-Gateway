const bookResolver = {
    Query: {
        bookByIdOwner: async(_, { userId }, { dataSources, userIdToken }) => {
            userIdToken = (await dataSources.authAPI.getUser(userIdToken)).userId
            if (userId == userIdToken)
                return await dataSources.bookAPI.bookByIdOwner(userId)
            else
                return null
        },

        booksUserByIdAplicant: async(_, { userId }, { dataSources, userIdToken }) => {
            userIdToken = (await dataSources.authAPI.getUser(userIdToken)).userId
            if (userId == userIdToken)
                return await dataSources.bookAPI.getBooksAplicant(userId)
            else
                return null
        },

    },
    Mutation: {
        editBook: async(_, { book }, {dataSources, userIdToken}) => {
            emailToken = (await dataSources.authAPI.getUser(userIdToken)).email;
            if(transaction.emailOrigin == emailToken)
                return await dataSources.bookAPI.editBook(book);
            else
                return null;
        },

        deleteBook: async(_, { userId }, {dataSources, userIdToken}) => {
            emailToken = (await dataSources.authAPI.getUser(userIdToken)).email;
            emailBook  = (await dataSources.bookAPI.bookByIdOwner(userId)).emailOrigin;
                if(book.emailOrigin == emailToken)
                    return await dataSources.bookAPI.deleteBook(userId);
                else
                    return null;
        }

    }
};
module.exports = bookResolver;
    