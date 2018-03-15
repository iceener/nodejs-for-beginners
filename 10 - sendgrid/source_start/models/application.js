const bookshelf = require('../config/bookshelf');

const Application = bookshelf.Model.extend({
    tableName: 'applications'
});

module.exports.create = ({ name, phone, message}) => {
    return new Application({ name, phone, message }).save();
};