import { Component } from "react";
import FormUtils from 'src/utils/FormUtils'

export default class NavBarButton extends Component {


    render() {

        const { className, onClick, text, ...others } = this.props

        return (
            <div className="col-xl-auto mt-3 mt-xl-0">
                <a onClick={onClick} className={FormUtils.mergeClassName({
                    default: 'mtu-nav-btn',
                    className:  className
                })} {...others}>
                    <span>{text}</span>
                </a>
            </div>
        );
    }
}