const authTypeDefs      = require('./authTypeDefs');
const bookTypeDefs      = require('./bookTypeDefs');
const exchangeTypeDefs  = require('./exchangeTypeDefs');

const schemasArrays = [authTypeDefs, bookTypeDefs, exchangeTypeDefs];
module.exports      = schemasArrays;