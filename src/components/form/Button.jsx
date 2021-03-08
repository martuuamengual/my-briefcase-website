import React, { Component } from 'react';
import $ from 'jquery';
import FormUtils from 'src/utils/FormUtils';


export default class Button extends Component {

    constructor(props) {
        super(props);
        this.sendButton = React.createRef();
        this.textButton = React.createRef();
        this.spinnerBorder = React.createRef();
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

    checkSubmitLoadingButton(isSubmitting) {
        if (isSubmitting) {
            this.showAnimationLoadingButton()
        } else {
            this.resetAnimationLoadingButton()
        }
    }
    
    render() {

        const { value, className, isSubmitting, ...other } = this.props

        this.checkSubmitLoadingButton(isSubmitting)

        return(
            <button className={FormUtils.mergeClassName({
                default: 'btn btn-primary',
                className: className
            })} ref={this.sendButton} {...other}>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" ref={this.spinnerBorder}></span>
                <span ref={this.textButton}>{value}</span>
            </button>
        );
    }
}