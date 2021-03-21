import React, { Component } from 'react';
import Input from 'src/components/form/Input'
import Form from 'src/components/form/Form'
import Textarea from 'src/components/form/Textarea'
import { Formik } from 'formik';
import Button from './form/Button';
import ReactHtmlParser from 'html-react-parser';
import { Language } from '@react-lang/language'
import $ from 'jquery';
import UrlUtils from 'src/utils/UrlUtils'


export default class FormContact extends Component {

    content = {
        es: {
            form: {
                name: {
                    label: 'Nombre',
                    validMessage: 'Se ve bien.',
                    invalidMessage: 'Campo requerido.',
                    tooLargeMessage: 'Demasiado largo.'
                },
                email: {
                    label: 'Correo electronico',
                    validMessage: 'Se ve bien.',
                    invalidMessage: 'Campo requerido.',
                    invalidEmailMessage: 'Formato invalido.'
                },
                message: {
                    label: 'Mensaje',
                    validMessage: 'Se ve bien.',
                    invalidMessage: 'Campo requerido.',
                },
                button: 'Enviar'
            },
            thanksMessage: 'Gracias por contactarme, me pondre en contacto en breve.',
            errorMessage: 'Lo sentimos, estamos experimentando un error, si desea puede enviarme un email <a href="mailto:martuu.amengual@gmail.com"><strong>martuu.amengual@gmail.com</strong></a>'
        },
        en: {
            form: {
                name: {
                    label: 'Name',
                    validMessage: 'Looks good.',
                    invalidMessage: 'This field is required.',
                    tooLargeMessage: 'Too large.'
                },
                email: {
                    label: 'Email address',
                    validMessage: 'Looks good.',
                    invalidMessage: 'This field is required.',
                    invalidEmailMessage: 'Invalid format.'
                },
                message: {
                    label: 'Message',
                    validMessage: 'Looks good.',
                    invalidMessage: 'This field is required.'
                },
                button: 'Send'
            },
            thanksMessage: 'Thank you for contacting me, I will be in touch shortly.',
            errorMessage: 'Sorry, we are experiencing an error, if you want you can send me an email to <a href="mailto:martuu.amengual@gmail.com"><strong>martuu.amengual@gmail.com</strong></a>'
        }
    }

    constructor(props) {
        super(props)
        this.formRef = React.createRef()
        this.thanksContainer = React.createRef()
        this.errorContainer = React.createRef()
    }

    handleSubmit = (values, { setSubmitting }) => {
        this.sendMessage(values, { setSubmitting: setSubmitting })
    }

    getInitialValues() {
        return {
            name: '',
            email: '',
            message: ''
        }
    }

    validate = (values) => {
        // THE MESSAGE KEY MUST BE EQUAL TO getValidationMessagesByLang FUNCTION
        let errors = {}

        if (values.name === '') {
            errors.name = {
                messageKey: 'invalidMessage'
            }
        } else if (values.name.length > 40) {
            errors.name = {
                messageKey: 'tooLargeMessage'
            }
        }

        if (values.email === '') {
            errors.email = {
                messageKey: 'invalidMessage'
            }
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
            errors.email = {
                messageKey: 'invalidEmailMessage'
            }
        }

        if (values.message === '') {
            errors.message = {
                messageKey: 'invalidMessage'
            }
        }

        return errors
    }

    getValidationMessagesByLang(get) {
        return {
            name: {
                validMessage: get(this.content, 'form.name.validMessage'),
                invalidMessage: get(this.content, 'form.name.invalidMessage'),
                tooLargeMessage: get(this.content, 'form.name.tooLargeMessage')
            },
            email: {
                validMessage: get(this.content, 'form.email.validMessage'),
                invalidMessage: get(this.content, 'form.email.invalidMessage'),
                invalidEmailMessage: get(this.content, 'form.email.invalidEmailMessage')
            },
            message: {
                validMessage: get(this.content, 'form.message.validMessage'),
                invalidMessage: get(this.content, 'form.message.invalidMessage'),
            }
        }
    }

    sendMessage(values, { setSubmitting }) {

        var formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('message', values.message);
        fetch(UrlUtils.getCurrentUrl() + '/api/contact/send-message', {
            method: 'POST',
            cache: 'no-cache',
            body: formData
        }).then((response) => {

            if (response.ok) {
                return response.json()
            }

            throw new Error('Something went wrong.');
        }).then((data) => {
            if (data.status === "ok") {
                setTimeout(() => {
                    setSubmitting(false)
                    let $form = $(this.formRef.current);
                    $form.slideUp(500, () => {
                        $(this.thanksContainer.current).removeClass('hidden').hide().slideDown(200);
                    });
                }, 1000);
            } else {
                // show error
                setSubmitting(false)
                $(this.errorContainer.current).removeClass('hidden').hide().slideDown(200);
            }
        }).catch((error) => {
            setSubmitting(false)
            $(this.errorContainer.current).removeClass('hidden').hide().slideDown(200);
        })
    }

    render() {
        return(
            <Language.Consumer>
                {({ get }) => (
                    <Formik initialValues={ this.getInitialValues() } validate={this.validate} onSubmit={this.handleSubmit} validateOnChange="true">
                        {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                        }) => (
                        <section>
                            <Form onSubmit={handleSubmit} ref={this.formRef} autoComplete="off" noValidate>
                                <Input type="text" name="name" id="name" label={get(this.content, 'form.name.label')} placeholder="John Feneck" onChange={handleChange} required="" validationMessages={this.getValidationMessagesByLang(get)} errors={errors} />
                                <Input type="text" name="email" id="email" label={get(this.content, 'form.email.label')} placeholder="example@email.com" onChange={handleChange} required="" validationMessages={this.getValidationMessagesByLang(get)} errors={errors} />
                                <Textarea type="text" name="message" id="message" label={get(this.content, 'form.message.label')} rows="5" onChange={handleChange} required="" validationMessages={this.getValidationMessagesByLang(get)} errors={errors} />
                                <Button isSubmitting={isSubmitting} type="submit" value={get(this.content, 'form.button')} />
                            </Form>
                            <p className="text-center hidden" ref={this.thanksContainer}>
                                {get(this.content, 'thanksMessage')}
                            </p>
                            <p className="error-message text-center hidden" ref={this.errorContainer}>
                                {ReactHtmlParser(get(this.content, 'errorMessage'))}
                            </p>
                        </section>
                        )}
                    </Formik>
                )}
            </Language.Consumer>
        );
    }
}