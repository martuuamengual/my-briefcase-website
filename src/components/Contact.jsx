import { Component } from "react";
import LanguageUtils from "Utils/LanguageUtils";

/*var API_KEY = process.env.EMAIL_API_KEY;
var DOMAIN = process.env.EMAIL_DOMAIN;*/
/*var API_KEY = 'key-134a299a885829bcc9aed4341297e213'
var DOMAIN = 'sandboxec409549fbf347c09e765fff1c403d86.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});*/


export default class Contact extends Component {

    state = {
        lang: this.props.lang
    }

    content = {
        es: {
            title: 'CONTACTO',
            form: {
                name: 'Nombre',
                email: 'Correo electronico',
                message: 'Mensaje'
            }
        },
        en: {
            title: 'CONTACT',
            form: {
                name: 'Name',
                email: 'Email address',
                message: 'Message'
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('sending')
        const data = {
            from: 'Martina <martina@gmail.com>',
            to: 'martuu.amengual@gmail.com',
            subject: 'Hello',
            text: 'Testing some Mailgun awesomeness!'
        };
        
        mailgun.messages().send(data, (error, body) => {
            console.log(body);
        });
    }

    render() {
        let content = LanguageUtils.getContent(this.props.lang, this.content);
        return(
            <section className="contact">
                <div className="container mt-50px">
                    <div className="mtu-title">{content.title}</div>
                    <div className="row">
                        <div className="col-xl-3"></div>
                        <div className="col-xl-6">
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="John Feneck" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea class="form-control" id="message" rows="5"></textarea>
                                </div>
                                <button type="submit">asdasd</button>
                            </form>
                        </div>
                        <div className="col-xl-3"></div>
                    </div>
                </div>
            </section>
        );
    }
}