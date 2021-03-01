import { Component } from 'react';
import Input from 'src/components/form/Input'
import Form from 'src/components/form/Form'
import { Formik } from 'formik';
import Button from './form/Button';
import ReactHtmlParser from 'html-react-parser';
import LanguageUtils from "src/utils/LanguageUtils";


export default class FormContact extends Component {

    content = {
        es: {
            form: {
                name: 'Nombre',
                email: 'Correo electronico',
                message: 'Mensaje',
            },
            thanksMessage: 'Gracias por contactarme, me pondre en contacto en breve.',
            errorMessage: 'Lo sentimos, estamos experimentando un error, si desea puede enviarme un email a <strong>martuu.amengual@gmail.com</strong>'
        },
        en: {
            form: {
                name: 'Name',
                email: 'Email address',
                message: 'Message',
                validMessage: 'Looks good.',
                invalidMessage: 'This field is required.'
            },
            thanksMessage: 'Thank you for contacting me, I will be in touch shortly.',
            errorMessage: 'Sorry, we are experiencing an error, if you want you can send me an email to <strong>martuu.amengual@gmail.com</strong>'
        }
    }

    handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    getInitialValues() {
        let content = LanguageUtils.getContent(this.props.lang, this.content)
        return {
            name: '',
            content: content
        }
    }

    render() {
        return(
            <Formik initialValues={ this.getInitialValues() } onSubmit={this.handleSubmit}>
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
                }) => (
                <section>
                    <Form lang={this.props.lang} onSubmit={handleSubmit}>
                        <Input type="text" name="name" id="name" label={values.content.form.name} placeholder="John Feneck" onChange={handleChange} required />
                        <Button type="submit" />
                    </Form>
                    <p className="text-center hidden" ref={this.thanksContainer}>
                        {values.content.thanksMessage}
                    </p>
                    <p className="error-message text-center hidden" ref={this.errorContainer}>
                        {ReactHtmlParser(values.content.errorMessage)}
                    </p>
                </section>
                )}
            </Formik>
        );
    }
}