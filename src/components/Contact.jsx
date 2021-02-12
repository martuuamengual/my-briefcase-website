import { Component } from "react";
import LanguageUtils from "src/utils/LanguageUtils";


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

    render() {
        let content = LanguageUtils.getContent(this.props.lang, this.content);
        return(
            <section className="contact">
                <div className="container mt-50px">
                    <div className="mtu-title">{content.title}</div>
                    <div className="row">
                        <div className="col-xl-3"></div>
                        <div className="col-xl-6">
                            <form>
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
                            </form>
                        </div>
                        <div className="col-xl-3"></div>
                    </div>
                </div>
            </section>
        );
    }
}