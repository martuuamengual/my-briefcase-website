import React, { Component } from "react";
import 'Styles/ProgressBar.sass'


export default class ProgressBar extends Component {

    state = {
        progressBarVisible: false,
        percentage: 0,
        minPercentage: 0,
        maxPercentage: 100
    }

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        if (!isNaN(parseInt(this.props.value, 10))) {
            let value = parseInt(this.props.value, 10);
            if ((this.state.minPercentage <= value) && (value <= this.state.maxPercentage)) {
                this.state.percentage = value;
            }
        }
    }

    activateAnimation() {
        let state = this.state
        state.progressBarVisible = true
        this.myRef.current.getElementsByClassName('value')[0].style.width = this.state.percentage.toString() + "%";
        this.setState(state)
    }

    resetAnimation() {
        let state = this.state
        state.progressBarVisible = false
        this.myRef.current.getElementsByClassName('value')[0].style.width = this.state.minPercentage.toString() + "%";
        this.setState(state)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        if (this.isInViewport() && !this.state.progressBarVisible) {
            this.activateAnimation()
        } else if (!this.isInViewport()) {
            this.resetAnimation()
        }
    }

    executeScroll = () => {
        this.myRef.current.scrollIntoView({behavior: 'smooth'})
    }

    handleRef = (ref) => {
        // we need to handle ref because when update the component html the ref dont updates
        if (ref != null) {
            this.myRef.current = ref;
            this.activateAnimation();
        }
    }

    isInViewport() {
        const rect = this.myRef.current.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    render() {
        return(
            <div className="progress-bar-mtu" ref={this.handleRef}>
                <span className="percentaje">{this.state.percentage.toString() + '%'}</span>
                <span className="text">{this.props.text}</span>
                <span className="value"></span>
            </div>
        );
    } 
}