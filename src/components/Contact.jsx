import React, { Component } from "react";
import 'src/styles/Contact.sass'
import FormContact from "./FormContact";
import { Language } from '@react-lang/language'
import UrlUtils from 'src/utils/UrlUtils'

class Contact extends Component {

    state = {
        show: true
    }

    content = {
        es: {
            title: 'CONTACTO',
        },
        en: {
            title: 'CONTACT',
        }
    }

    componentDidMount() {
        fetch(UrlUtils.getCurrentUrl() + '/api/contact/check', {
            method: 'POST',
            cache: 'no-cache'
        }).then((response) => {
            response.json().then((data) => {
                if (data.status === 'denied') {
                    let state = {...this.state}
                    state.show = false
                    this.setState(state);
                }
            })
        })
    }

    render() {
        return(
            <section>
                {this.state.show &&
                <section className="contact">
                    <div className="container mt-50px">
                        <Language.Consumer>
                            {({ get }) => (
                                <div className="mtu-title">{get(this.content, 'title')}</div>
                            )}
                        </Language.Consumer>
                        <div className="row">
                            <div className="col-xl-3"></div>
                            <div className="col-xl-6">
                                <FormContact />
                            </div>
                            <div className="col-xl-3"></div>
                        </div>
                    </div>
                </section>
                }
            </section>
        );
    }
}

export default Contact;