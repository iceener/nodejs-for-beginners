const bookshelf = require('../config/bookshelf');

const Application = bookshelf.Model.extend({
    tableName: 'applications'
});

module.exports.create = ({ name, email, message}) => {
    return new Application({ name, email, message }).save();
};