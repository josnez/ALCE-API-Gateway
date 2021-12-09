const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ExchangeAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.exchange_api_url;
    }
    
    async createExchange(exchange) {
        exchange = new Object(JSON.parse(JSON.stringify(exchange)));
        return await this.post('/exchange', exchange);
    }

    async createExchangeNotification(notification) {
        notification = new Object(JSON.parse(JSON.stringify(notification)));
        return await this.post('/exchangeNoti', notification);
    }
    
    async getExchange(id) {
        return await this.get(`/exchange/${id}`);
    }

    async exchangeByIdOwner(idOwner) {
        return await this.get(`/exchange/${idOwner}`);
    }

    async updateExchange(exchangeId) {
        exchangeId = new Object(JSON.parse(JSON.stringify(exchangeId)));
        return await this.put(`/exchange/${id}`);
    }
    async deleteExchange (exchangeId) {
        exchangeId = new Object(JSON.parse(JSON.stringify({exchangeId})));
        return await this.delete(`/exchange/${id}`);
    }
}
module.exports = ExchangeAPI;