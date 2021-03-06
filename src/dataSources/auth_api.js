const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AuthAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = serverConfig.authApiURL;
    }
    
    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user);
    }
    
    async getUser(userId) {
        const devolvio = await this.get(`/user/${userId}`);
        return devolvio
    }
    
    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }
    
    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post('/refresh/', token);
    }

    async deleteUser (userId) {
        userId = new Object(JSON.parse(JSON.stringify({ userId})));
        return await this.delete(`/userDelete/${userId}`);
    }

    async updateUser(userId, userInput) {
        //userInput = new Object(JSON.parse(JSON.stringify({ userInput })));
        return await this.put(`/userUpdate/${userId}`, userInput);
    }
}
module.exports = AuthAPI;
