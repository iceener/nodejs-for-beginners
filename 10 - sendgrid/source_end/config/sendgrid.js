const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SENDGRID_APIKEY');

const message = {};
message.from = 'adam@overment.com';
message.mail_settings = {
    sandbox_mode: {
        enable: true
    }
};

exports.message = message;