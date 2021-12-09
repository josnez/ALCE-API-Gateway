const bookResolver      = require('./bookResolver')
const exchangeResolver  = require('./exchangeResolver');
const authResolver      = require('./authResolver');
const lodash            = require('lodash');

const resolvers         = lodash.merge(bookResolver, exchangeResolver, authResolver);

module.exports = resolvers;