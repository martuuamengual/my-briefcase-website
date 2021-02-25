const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const EnviromentUtils = require('./EnviromentUtils')
const mg = mailgun.client({
    username: 'api',
    key: EnviromentUtils.getValue('API_KEY')
});

class Mail {
    static sendContactMessage(body) {
        if (!EnviromentUtils.compare('NODE_ENV', 'production') && !EnviromentUtils.getBoolean('SEND_EMAIL')) {
            return new Promise(function (resolve, rejt) {
                resolve();
            });
        }
        let name = body.name;
        let email = body.email;
        let message = body.message;

        let text = 'name: ' + name + '\n' + 'email: ' + email + '\n' + 'message: ' + message;

        return mg.messages.create(EnviromentUtils.getValue('DOMAIN'), {
            from: "CONTACT-CV <info@martuu.amengual.com>",
            to: ["martuu.amengual@gmail.com"],
            subject: "You recive a contact from website cv",
            text: text
        })
    }
}

module.exports = Mail;