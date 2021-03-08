import React, { Component } from "react";


export default class Form extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (this.props.onSubmit) {
            this.props.onSubmit(event);
        }
    }
    
    render() {

        const { onSubmit, children, ...others } = this.props

        return(
            <form onSubmit={this.handleSubmit} {...others}>
                {children}
            </form>
        );
    }
}