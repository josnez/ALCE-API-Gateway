const bookResolver = {
  Query: {
    booksByIdOwner: async (_, { userId }, { dataSources, userIdToken }) => {
      console.log("Id resolver: " + userIdToken + " " + userId);
      if (userId == userIdToken)
      return await dataSources.bookAPI.booksByIdOwner(userId);
      else return null;
    },
    
    booksByIdAplicant: async (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
      return await dataSources.bookAPI.getBooksAplicant(userId);
      else return null;
    },
    
    infoBookById: async (_, { bookId }, { dataSources }) => {
      return await dataSources.bookAPI.bookById(bookId);
    }
  },

  Mutation: {
    // TODO make verification with token
    createBook: (_, { bookInput }, { dataSources }) => 
    dataSources.bookAPI.createBook(bookInput),
    
    editBook: async (_, { bookId }, { dataSources, userIdToken }) => {
      userId = (await dataSources.bookAPI.bookById(bookId)).idOwner;
      if (userId == userIdToken)
        return await dataSources.bookAPI.editBook(book);
      else return null;
    },

    deleteBook: async (_, { bookId }, { dataSources }) => {
      return await dataSources.bookAPI.deleteBook(bookId);
    },
  },
};
module.exports = bookResolver;