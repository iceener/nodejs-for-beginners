const Application = require('../models/application');
const { check, validationResult } = require('express-validator/check');

// Store new application
exports.store = async (req, res, next) => {
    await Application.create({'name': req.body.name,
        'phone': req.body.phone,
        'message': req.body.message
    });

    req.flash('form', req.body.first_name + ', you are a true hero!');
    res.redirect('/');
};

exports.validate = [
    check('name').trim().isLength({ min: 1 }).withMessage('Name must be provided'),
    check('phone').isLength({ min: 1 }).withMessage('Phone must be provided'),
    check('message').isLength({ min: 1 }).withMessage('Message must be provided'),
];

exports.checkValidation = (req, res, next)  => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render('home', {
            validated: req.body,
            errors: errors.mapped(),
            showLightbox: 'true'
        });
    }

    next();
};

// Normalize form data
exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');

    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join();

    next();
};