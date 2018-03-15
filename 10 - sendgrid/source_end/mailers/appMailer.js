const mailer = require('./mailer');

exports.applicationNotify = (options) => {
    const defaultOptions = {
        subject: '[shelter for dogs] Thank you, Hero!',
        view: 'application-notification'
    };

    return mailer.send(Object.assign(defaultOptions, options));
};