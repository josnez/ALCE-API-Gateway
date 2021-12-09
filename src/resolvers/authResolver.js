const authResolver = {
    Query: {
        userDetailById: async(_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId);
            else
                return null;
        }
    },
    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
            const bookInput = {
                email           : userInput.email,
                tittle          : userInput.tittle,
                author          : userInput.author,
                editorial       : userInput.editorial,
                genre           : userInput.genre,
                year            : userInput.year,
                physicalState   : userInput.physicalState,
                edition         : userInput.edition,
                language        : userInput.language,
            }
            await dataSources.bookAPI.createBook(bookInput);
    
            const authInput = {
                email               : userInput.email,
                password            : userInput.password,
                name                : userInput.name,
                last_name           : userInput.last_name,
                department          : userInput.department,
                city                : userInput.city,
                address             : userInput.address,
                address_complement  : userInput.address_complement,
                postal_code         : userInput.postal_code
            }
            return await dataSources.authAPI.createUser(authInput);

        },
        logIn: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.authRequest(credentials);
        },

        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.authAPI.refreshToken(refresh),
    }
};
module.exports = authResolver;