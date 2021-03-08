import React, { Component } from "react";
import 'src/styles/Contact.sass'
import $ from 'jquery';
import StringUtils from "src/utils/StringUtils";
import FormContact from "./FormContact";
import { Language } from '@react-lang/language'

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
        fetch('http://localhost:8080/api/contact/check', {
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

    validateFormAndShowMessages(isSubmited) {

        let { name } = this.props.form
        let { email } = this.props.form
        let { message } = this.props.form

        let $form = $(this.formRef.current)
        let cssValid = 'is-valid'
        let cssInvalid = 'is-invalid'

        let data = {
            name: name, 
            email: email, 
            message: message, 
            $form: $form, 
            cssValid: cssValid, 
            cssInvalid: cssInvalid
        }

        
        if (StringUtils.areValidFields(name, email, message)) {
            if (isSubmited) {
                this.sendMessage()
            }
        }
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