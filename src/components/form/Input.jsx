import { Component } from "react";


export default class Input extends Component {

    content = {
        es: {
            validMessage: 'Se ve bien.',
            invalidMessage: 'Campo requerido.'
        },
        en: {
            validMessage: 'Looks good.',
            invalidMessage: 'This field is required.'
        }
    }

    handleOnChange = (event) => {
        console.log('PASSEEE')
        if (this.props.onChange) {
            console.log('onChange')
            this.props.onChange(event);
        }


        //this.validateFormAndShowMessages();
    }

    render() {
        var {lang, ...other} = this.props;
        return(
            <div className="form-group">
                <label for={this.props.id}>{this.props.label}</label>
                <input type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} onChange={this.handleOnChange} {...other} />
                <div class="invalid-feedback">
                    {content.invalidMessage}
                </div>
                <div class="valid-feedback">
                    {content.validMessage}
                </div>
            </div>
        );
    }
}
