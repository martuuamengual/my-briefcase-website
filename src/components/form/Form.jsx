import React, { Component } from "react";
import { wrapRef } from 'src/utils/wraps/wrapRef'

class Form extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (this.props.onSubmit) {
            this.props.onSubmit(event);
        }
    }
    
    render() {

        const { onSubmit, children, forwardedRef, ...others } = this.props

        return(
            <form onSubmit={this.handleSubmit} ref={forwardedRef} {...others}>
                {children}
            </form>
        );
    }
}

export default wrapRef(Form);