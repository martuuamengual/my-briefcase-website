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
        $(this.buttonRef.current).fadeOut(1)
        this.setFooterObserver()
        this.setEducationObserver()
    }

    setFooterObserver() {
        let thresholds = []
        for (let i=0; i <= 1; i += 0.05) {
            thresholds.push(i)
        }

        const intersectionOptions = {
            root: null,  // use the viewport
            rootMargin: '0px',
            threshold: thresholds
        }
        let observer = new IntersectionObserver(this.intersectionFooterCallback, intersectionOptions);
        let target = document.querySelector('footer')
        observer.observe(target);
    }

    setEducationObserver() {
        const intersectionOptions = {
            root: null,  // use the viewport
            rootMargin: '0px',
            threshold: [0, 0.1, 0.2, 1]
        }
        let observer = new IntersectionObserver(this.intersectionEducationCallback, intersectionOptions);
        let target = document.querySelector('section[class="education"]')
        observer.observe(target);
    }

    intersectionEducationCallback = (entries, observer) => {
        entries.forEach(entry => {
            this.animate(entry);
        });
    }

    intersectionFooterCallback = (entries, observer) => {
        entries.forEach(entry => {
            this.checkNewPositionOnFooterInViewPort(entry);
        });
    }

    handleClick = () => {
        let body = document.getElementsByTagName('body')[0];
        body.scrollIntoView({behavior: 'smooth'})
    }

    animate(entry) {
        let experience = $('section[class="experience"]')
        let offsetExperience = experience.position().top - entry.target.offsetTop + entry.target.offsetHeight
        let goThroughExperience = (window.pageYOffset > offsetExperience)

        if (!entry.isIntersecting && !goThroughExperience) {
            $(this.buttonRef.current).fadeOut(200)
        } else {
            $(this.buttonRef.current).fadeIn(200)
        }
    }

    checkNewPositionOnFooterInViewPort(entry) {
        let footer = $('footer')
        let button = $(this.buttonRef.current)
        if (!entry.isIntersecting) {
            button.css('bottom', '10px')
        } else {
            let offset = 60 // height aprox of button
            let offsetTop = 0
            let bottom = parseInt(button.css('bottom').replace('px', ''))
            let position = 0

            if (footer.offset().top < button.offset().top) {
                // scrolling to bottom
                offsetTop = button.offset().top - footer.offset().top
                if (offsetTop > 0) {
                    position = bottom + offsetTop + offset
                }
            } else {
                // scrolling to top
                offsetTop = footer.offset().top - button.offset().top
                if (offsetTop > 0) {
                    position = bottom - offsetTop + offset
                }
            }
            

            if (position > 0) {
                button.css('bottom', position + 'px')
            }
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