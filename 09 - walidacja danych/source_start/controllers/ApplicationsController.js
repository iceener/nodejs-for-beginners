const Application = require('../models/application');

// Store new application
exports.store = async (req, res, next) => {
    await Application.create({'name': req.body.name,
        'phone': req.body.phone,
        'message': req.body.message
    });

    req.flash('form', req.body.first_name + ', you are a true hero!');
    res.redirect('/');
};

// Normalize form data
exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join();

    next();
};