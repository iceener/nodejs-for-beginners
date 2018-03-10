const Application = require('../models/application');

// Store new application
exports.store = (req, res, next) => {

    Application.create({
        'name': req.body.name,
        'phone': req.body.phone,
        'message': req.body.message
    }).then(function () {
        req.flash('form', req.body.first_name + ', you are a true hero!');
        res.redirect('/');
    }).catch(next);

};

// Normalize form data
exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join();

    next();
};