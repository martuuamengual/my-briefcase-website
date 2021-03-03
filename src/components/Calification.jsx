import React, { Component } from "react";
import 'src/styles/Calification.sass';
import $ from 'jquery';
import { Language } from '@react-lang/language'


export default class Calification extends Component {

    state = {
        show: true
    }

    content = {
        es: {
            message: 'Agradeceria que califiques mi CV',
            thanksMessage: '¡Gracias por calificar!',
            note: 'NOTA: No se podra calificar una segunda vez'
        },
        en: {
            message: 'I would appreciate if you rate my CV',
            thanksMessage: 'Thanks for rating!',
            note: 'NOTE: It will not be possible to qualify a second time'
        }
    }

    constructor(props) {
        super(props);
        this.messageRef = React.createRef();
        this.thanksMessageRef = React.createRef();
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/calification/check', {
            method: 'POST',
            cache: 'no-cache'
        }).then((response) => {
            response.json().then((data) => {
                if (data.status === 'denied') {
                    let state = {...this.state}
                    state.show = false
                    this.setState(state);
                }
            })
        })
    }

    handleOver = (event) => {
        let star = event.target;
        star.classList.remove('far');
        star.classList.add('fas');
    }

    handleLeave = (event) => {
        let star = event.target
        star.classList.remove('fas');
        star.classList.add('far');
    }

    handleClick = (event) => {
        let currentStar = event.target;
        let currentStarNum = parseInt(currentStar.dataset.star, 10);
        let listStar = [];
        let notSelectedListStar = [];
        for (let i = 0; i <= currentStarNum; i++) {
            let star = $(currentStar.parentElement).find('[data-star="' + i + '"]');
            listStar.push(star);
        }
        for (let i = 5; i > currentStarNum; i--) {
            let star = $(currentStar.parentElement).find('[data-star="' + i + '"]');
            notSelectedListStar.push(star);
        }
        listStar.forEach(function(element) {
            element.removeClass('far');
            element.addClass('fas');
            element.addClass('checked');
        });
        notSelectedListStar.forEach(function (element) {
            element.addClass('checked');
        });


        fetch('http://localhost:8080/api/calification/set', {
            method: 'PUT',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stars: listStar.length-1})
        }).then((response) => {
            response.json().then((data) => {
                if (data.status === 'ok') {
                    this.animationStars()
                }
            })
        });
    }

    animationStars() {
        setTimeout(function() {
            let ratingContainer = $('.rating-container');
            ratingContainer.fadeOut(500, function() {
                $(this.messageRef.current).hide();
                $(this.thanksMessageRef.current).removeClass('hidden').hide().show();
                setTimeout(function() {
                    $('.calification').slideUp(200);
                }, 1000);
            });
        }, 1000);
    }

    render() {
        return(
            <section className="calification">
                {this.state.show &&
                <div className="container-fluid mt-80px">
                    <div className="row justify-content-center align-items-center mtu-row">
                        <div className="col-xl"></div>
                        <Language.Consumer>
                            {({ get }) => (
                                <div className="col-xl text-center">
                                    <span ref={this.messageRef}>{get(this.content, 'message')}</span>
                                    <span className="hidden" ref={this.thanksMessageRef}>{get(this.content, 'thanksMessage')}</span>
                                    <div className="rating-container">
                                        <div className="rating">
                                            <span onClick={this.handleClick} data-star="5" className="far fa-star"></span>
                                            <span onClick={this.handleClick} data-star="4" className="far fa-star"></span>
                                            <span onClick={this.handleClick} data-star="3" className="far fa-star"></span>
                                            <span onClick={this.handleClick} data-star="2" className="far fa-star"></span>
                                            <span onClick={this.handleClick} data-star="1" className="far fa-star"></span>
                                        </div>
                                        <span>{get(this.content, 'note')}</span>
                                    </div>
                                </div>
                            )}
                        </Language.Consumer>
                        <div className="col-xl"></div>
                    </div>
                </div>
                }
            </section>
        );
    }
}