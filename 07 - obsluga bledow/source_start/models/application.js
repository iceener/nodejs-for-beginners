const bookshelf = require('../config/bookshelf');

const Application = bookshelf.Model.extend({
    tableName: 'applications'
});

module.exports.create = (application) => {
    return new Application({
        name: application.name,
        phone: application.phone,
        message: application.message
    }).save();
};