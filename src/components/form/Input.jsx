import { Component } from "react";
import { Language } from '@react-lang/language'


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
        return(
            <div className="form-group">
                <label for={this.props.id}>{this.props.label}</label>
                <input type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} onChange={this.handleOnChange} {...this.props} />
                <div class="invalid-feedback">
                    <Language.Consumer>
                        {({ get }) => (
                            <span>{get(this.content, 'invalidMessage')}</span>
                        )}
                    </Language.Consumer>
                </div>
                <div class="valid-feedback">
                    <Language.Consumer>
                        {({ get }) => (
                            <span>{get(this.content, 'validMessage')}</span>
                        )}
                    </Language.Consumer>
                </div>
            </div>
        );
    }
}
