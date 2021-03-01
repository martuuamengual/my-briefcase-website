import { Component } from 'react';


export default class Button extends Component {

    constructor(props) {
        super(props);
        this.sendButton = React.createRef();
        this.textButton = React.createRef();
        this.spinnerBorder = React.createRef();
    }
    
    render() {
        var {lang, ...other} = this.props;
        return(
            <button type={this.props.type} className="btn btn-primary" ref={this.sendButton} {...other}>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" ref={this.spinnerBorder}></span>
                <span ref={this.textButton}>{this.props.lang}</span>
            </button>
        );
    }
}