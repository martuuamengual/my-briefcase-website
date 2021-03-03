import React, { Component } from "react";


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }


    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (this.props.onSubmit) {
            this.props.onSubmit(event);
        }
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit} ref={this.formRef} noValidate>
                {this.props.children}
            </form>
        );
    }
}