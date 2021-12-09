const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');

class AuthAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.AuthAPIUrl;
    }

    async createUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post( `/user/`, user);

    }
    async getUser(userId){
        return await this.get(`/user/${userId}/`);
    }
    async updateUser(user){
        let userId = user.id;
        return await this.put(`/user/update/${userId}`, user)
    }
    async deleteUser(userId){
        return await this.delete(`/user/delete/${userId}/`);

    }
    async authRequest(credentials){
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials)
    }
    async refreshToken(token){
        token = new Object(JSON.parse(JSON.stringify(token)));
        return await this.post(`/refresh/`, token)
    }
}
module.exports = AuthAPI;