const authTypes      = require('./authTypeDefs');
const bookTypes      = require('./bookTypeDefs');
const exchangeTypes  = require('./exchangeTypeDefs');

const schemasArrays = [authTypes, bookTypes, exchangeTypes];
module.exports      = schemasArrays;