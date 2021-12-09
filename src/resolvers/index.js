const bookResolver = require('./books_resolver')
const exchangeResolver = require('./exchange_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(bookResolver, exchangeResolver, authResolver);

module.exports = resolvers