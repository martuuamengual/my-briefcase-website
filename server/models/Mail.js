const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const Enviroment = require('./Enviroment')
const mg = mailgun.client({
    username: 'api',
    key: Enviroment.getValue('API_KEY') || 'API-KEY'
});

class Mail {
    static haveToSendEmail() {
        if (Enviroment.isProd()) return true;
        if (Enviroment.isDev() && Enviroment.getBoolean('SEND_EMAIL')) return true;
        return false;
    }

    static promise() {
        return new Promise(function (resolve, rejt) {
            resolve({});
        });
    }

    static async sendContactMessage(body) {
        let name = body.name;
        let email = body.email;
        let message = body.message;

        let text = `name: ${name} \n email: ${email} \n message: ${message}`

        if (!Mail.haveToSendEmail()) {
            console.log('Email to send:', text)
            return Mail.promise()
        }

        return await mg.messages.create(Enviroment.getValue('DOMAIN'), {
            from: "CONTACT-CV <info@martuu.amengual.com>",
            to: ["martuu.amengual@gmail.com"],
            subject: "You recive a contact from website cv",
            text: text
        })
    }

    static async sendCalificationMessage(stars) {
        let text = `A user gives you ${stars} STARS`;

        if (!Mail.haveToSendEmail()) {
            console.log('Email to send:', text)
            return Mail.promise()
        }

        return await mg.messages.create(Enviroment.getValue('DOMAIN'), {
            from: "CALIFICATION-CV <info@martuu.amengual.com>",
            to: ["martuu.amengual@gmail.com"],
            subject: "You recive a calification from website cv",
            text: text
        })
    }
}

module.exports = Mail;