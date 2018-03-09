const knex = require('knex')(require('./knexflie'));
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;