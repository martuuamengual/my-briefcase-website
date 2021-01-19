import { Component } from "react";
import StringUtils from '../../utils/StringUtils'

export default class NavBarButton extends Component {

    
    state = {
        className: 'col-md-auto mt-3 mt-md-0',
        href: '#',
        text: 'NO_TEXT'
    }
    
    constructor(props) {
        super(props);
        if (StringUtils.isValidString(props.className)) {
            this.state.className += ' ' + props.className;
        }
        if (StringUtils.isValidString(props.href)) {
            this.state.href = props.href;
        }
        if (StringUtils.isValidString(props.text)) {
            this.state.text = props.text;
        }
    }

    render() {
        return (
            <div className={this.state.className}>
                <a href={this.state.href} className="mtu-nav-btn">
                    <span>{this.state.text}</span>
                </a>
            </div>
        );
    }
}