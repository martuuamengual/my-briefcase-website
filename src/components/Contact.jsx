import React, { Component } from "react";
import LanguageUtils from "src/utils/LanguageUtils";
import 'src/styles/Contact.sass'
import $ from 'jquery';
import { connect } from 'react-redux';
import { setName, setEmail, setMessage } from 'src/redux/Contact/slice/form'
import ReactHtmlParser from 'html-react-parser';

class Contact extends Component {

    state = {
        lang: this.props.lang,
        show: true
    }

    content = {
        es: {
            title: 'CONTACTO',
            form: {
                name: 'Nombre',
                email: 'Correo electronico',
                message: 'Mensaje'
            },
            thanksMessage: 'Gracias por contactarme, me pondre en contacto en breve.',
            errorMessage: 'Lo sentimos, estamos experimentando un error, si desea puede enviarme un email a <strong>martuu.amengual@gmail.com</strong>'
        },
        en: {
            title: 'CONTACT',
            form: {
                name: 'Name',
                email: 'Email address',
                message: 'Message'
            },
            thanksMessage: 'Thank you for contacting me, I will be in touch shortly.',
            errorMessage: 'Sorry, we are experiencing an error, if you want you can send me an email to <strong>martuu.amengual@gmail.com</strong>'
        }
    }

    constructor(props) {
        super(props);
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

        $(this.sendButton.current).prop('disabled', true)
        $(this.textButton.current).hide()
        $(this.spinnerBorder.current).addClass('show')

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
                                    let $form = $(event.target);
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

    render() {
        let content = LanguageUtils.getContent(this.props.lang, this.content);
        return(
            <section className="contact">
            {this.state.show &&
                <div className="container mt-50px">
                    <div className="mtu-title">{content.title}</div>
                    <div className="row">
                        <div className="col-xl-3"></div>
                        <div className="col-xl-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="John Feneck" onChange={(event) => this.props.setName(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(event) => this.props.setEmail(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" id="message" rows="5" onChange={(event) => this.props.setMessage(event.target.value)}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" ref={this.sendButton}>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" ref={this.spinnerBorder}></span>
                                    <span ref={this.textButton}>Send</span>
                                </button>
                            </form>
                            <p className="text-center hidden" ref={this.thanksContainer}>
                                {content.thanksMessage}
                            </p>
                            <p className="error-message text-center hidden" ref={this.errorContainer}>
                                {ReactHtmlParser(content.errorMessage)}
                            </p>
                        </div>
                        <div className="col-xl-3"></div>
                    </div>
                </div>
                }
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setName: (name) => {
           dispatch(setName(name));
        },
        setEmail: (email) => {
            dispatch(setEmail(email))
        },
        setMessage: (message) => {
            dispatch(setMessage(message))
        }
    }
}

function mapStateToProps(state) {
    return {
        form: {
            name: state.form.name,
            email: state.form.email,
            message: state.form.message
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Contact);