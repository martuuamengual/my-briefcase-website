import React, { Component } from "react";
import LanguageUtils from "src/utils/JqueryUtils";
import 'src/styles/Contact.sass'
import $ from 'jquery';
import { connect } from 'react-redux';
import StringUtils from "src/utils/StringUtils";
import FormContact from "./FormContact";

class Contact extends Component {

    state = {
        lang: this.props.lang,
        show: true
    }

    content = {
        es: {
            title: 'CONTACTO',
        },
        en: {
            title: 'CONTACT',
            asd: {
                dd: 'puta'
            }
        }
    }

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.sendButton = React.createRef();
        this.textButton = React.createRef();
        this.spinnerBorder = React.createRef();
        this.thanksContainer = React.createRef();
        this.errorContainer = React.createRef();
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

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.showAnimationLoadingButton()

        this.validateFormAndShowMessages(true)
    }

    showAnimationLoadingButton() {
        $(this.sendButton.current).prop('disabled', true)
        $(this.textButton.current).hide()
        $(this.spinnerBorder.current).addClass('show')
    }

    resetAnimationLoadingButton() {
        $(this.textButton.current).show()
        $(this.spinnerBorder.current).removeClass('show')
        $(this.sendButton.current).prop('disabled', false)
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
            this.updateFieldsMessages(data)
        } else {
            this.updateFieldsMessages(data)
        }
    }

    updateFieldsMessages(data) {
        this.resetAnimationLoadingButton()
        this.checkNameField(data)
        this.checkEmailField(data)
        this.checkMessageField(data)
    }

    checkNameField(data) {
        let $name = data.$form.find('input[id="name"]')

        if (StringUtils.isValidField(data.name)) {
            $name.removeClass(data.cssInvalid)
            $name.addClass(data.cssValid)
        } else {
            $name.removeClass(data.cssValid)
            $name.addClass(data.cssInvalid)
        }
    }

    checkEmailField(data) {
        let $email = data.$form.find('input[id="email"]')

        if (StringUtils.isValidField(data.email)) {
            $email.removeClass(data.cssInvalid)
            $email.addClass(data.cssValid)
        } else {
            $email.removeClass(data.cssValid)
            $email.addClass(data.cssInvalid)
        }
    }

    checkMessageField(data) {
        let $message = data.$form.find('textarea[id="message"]')

        if (StringUtils.isValidField(data.message)) {
            $message.removeClass(data.cssInvalid)
            $message.addClass(data.cssValid)
        } else {
            $message.removeClass(data.cssValid)
            $message.addClass(data.cssInvalid)
        }
    }

    sendMessage() {

        let { name } = this.props.form
        let { email } = this.props.form
        let { message } = this.props.form

        var formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        fetch('http://localhost:8080/api/send-message', {
            method: 'POST',
            cache: 'no-cache',
            body: formData
        }).then((response) => {
            response.json().then((data) => {
                if (data.status === "ok") {
                    fetch('http://localhost:8080/api/contact/set', {
                        method: 'PUT',
                        cache: 'no-cache'
                    }).then((response) => {
                        response.json().then((data) => {
                            if (data.status === 'ok') {
                                setTimeout(() => {
                                    let $form = $(this.formRef.current);
                                    $form.slideUp(500, () => {
                                        $(this.thanksContainer.current).removeClass('hidden').hide().slideDown(200);
                                    });
                                }, 1000);
                            }
                        })
                    });
                } else {
                    // show error
                    $(this.errorContainer.current).removeClass('hidden').hide().slideDown(200);
                }
            })
        }).catch((error) => {
            $(this.errorContainer.current).removeClass('hidden').hide().slideDown(200);
        })
    }

    handleChange = () => {
        console.log('eeee')
    }

    render() {
        return(
            <section className="contact">
            {this.state.show &&
                <div className="container mt-50px">
                    <div className="mtu-title">{content.title}</div>
                    <div className="row">
                        <div className="col-xl-3"></div>
                        <div className="col-xl-6">
                            <FormContact />
                        </div>
                        <div className="col-xl-3"></div>
                    </div>
                </div>
                }
            </section>
        );
    }
}

export default Contact;