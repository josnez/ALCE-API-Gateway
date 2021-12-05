const {ApolloError} = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');

const authentication = async({request_}) => {
    const token = request_.headers.authorization || '';
    if (token == ''){
        return {userIdToken: null}
    } else {
        try {
            let requestOptions = {
                method   : "POST",
                headers  : {"Content-Type" : "application/json"},
                body     : JSON.stringify({token}),
                redirect : "follow"
            }
    
            let response = await fetch(
                `${serverConfig.authApiURL}/verifyToken/`,
                requestOptions
            )
    
            if(response.status != 200){
                console.log(response);
                throw new ApolloError(`La sesión está inactiva - ${401}` + response.status, 401);
            }
    
            return {userIdToken: (await response.json()).UserId};
        } catch(error) {
            throw   new ApolloError(`Token error: ${500}: ${error}`, 500);
        }
    }
};
module.exports = authentication;