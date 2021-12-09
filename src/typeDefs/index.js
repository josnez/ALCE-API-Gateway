//Se llama al typedef (esquema) de cada submodulo
const bookTypeDefs = require('./books_type_defs');
const exchangeTypeDefs = require('./exchange_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, bookTypeDefs, exchangeTypeDefs];

//Se exportan
module.exports = schemasArrays;