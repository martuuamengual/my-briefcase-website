import { Component } from "react";
import FormUtils from 'src/utils/FormUtils'


export default class Textarea extends Component {

    state = {
        hasToValidate: false
    }

    setHasToValidate(value) {
        let state = {...this.state}
        state.hasToValidate = value
        this.setState(state)
    }

    handleOnChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event);
            this.setHasToValidate(true)
        }
    }

    render() {

        const { id, name, label, className, onChange, validationMessages, errors, ...other } = this.props

        return(
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <textarea name={name} id={id} className={FormUtils.mergeClassNameWithValidation({
                    default: 'form-control',
                    className: className,
                    errors: errors,
                    name: name,
                    hasToValidate: this.state.hasToValidate
                 })} onChange={this.handleOnChange} {...other}></textarea>
                <div className="invalid-feedback">
                    {errors[name] && validationMessages[name][errors[name].messageKey]}
                </div>
                <div className="valid-feedback">
                    {!errors[name] && validationMessages[name].validMessage}
                </div>
            </div>
        );
    }
}