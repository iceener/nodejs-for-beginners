const Application = require('../models/application');
const { check, validationResult } = require('express-validator/check');
const appMailer = require('../mailers/appMailer');

// Store new application
exports.store = async (req, res, next) => {
    const application = {
        'name': req.body.name,
        'email': req.body.email.toLowerCase(),
        'message': req.body.message
    };

    await Application.create(application);

    // send notification
    appMailer.applicationNotify({
        email: application.email,
        data: { name: application.name }
    });

    req.flash('form', req.body.first_name + ', you are a true hero!');
    res.redirect('/');
};

exports.validate = [
    check('name').trim().isLength({ min: 1 }).withMessage('Name must be provided'),
    check('email').isEmail().withMessage('Incorrect e-mail.').isLength({ min: 1 }).withMessage('E-mail must be provided'),
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