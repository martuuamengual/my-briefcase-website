import React, { Component } from "react";
import 'src/styles/GoTop.sass'
import $ from 'jquery';
import { ReactComponent as Arrow } from 'src/images/Arrow.svg'
import JqueryUtils from "src/utils/JqueryUtils";


export default class GoTop extends Component {

    constructor(props) {
        super(props)
        this.buttonRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        this.animate();
        this.checkNewPositionOnFooterInViewPort()
        setTimeout(() => {
            if(JqueryUtils.isScrollInBottom()) {
                $(this.buttonRef.current).css('bottom', 90 + 'px')
            }
        }, 1000)
    }

    handleClick = () => {
        let body = document.getElementsByTagName('body')[0];
        body.scrollIntoView({behavior: 'smooth'})
    }

    animate() {
        if (this.checkIfTop()) {
            $(this.buttonRef.current).fadeOut(200)
        } else {
            $(this.buttonRef.current).fadeIn(200)
        }
    }

    checkNewPositionOnFooterInViewPort() {
        let footer = $('footer')
        let button = $(this.buttonRef.current)
        if (JqueryUtils.isInViewport(footer)) {
            let offset = 60
            let offsetTop = button.offset().top - footer.offset().top
            let position = offsetTop + offset
            if (position > 0) {
                button.css('bottom', position + 'px')
            }
        } else {
            button.css('bottom', '10px')
        }
    }

    checkIfTop() {
        if (window.pageYOffset >= 0 && window.pageYOffset <= 100) {
            return true;
        } else {
            return false
        }
    }

    render() {
        return(
            <section className="goTop">
                <button ref={this.buttonRef} onClick={this.handleClick}>
                    <Arrow />
                </button>
            </section>
        );
    }
}