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
        const childrenWithProps = React.Children.map(this.props.children, child => {
            // checking isValidElement is the safe way and avoids a typescript error too
            /* if (React.isValidElement(child)) {
              return React.cloneElement(child, { lang: this.props.lang });
            }*/
            if (React.isValidElement(child)) {
                let object = Object.assign({ mm: { dd: 'ggg' } });
                return React.createElement(child.type, 
                    Object.assign({}, child.props, { lang: this.props.lang, t: () => { return 'martu'  }, d: object })
                );
            }
            return child;
          });

        return(
            <form onSubmit={this.handleSubmit} ref={this.formRef} noValidate>
                {childrenWithProps}
            </form>
        );
    }
}