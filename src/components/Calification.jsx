import { Component } from "react";
import 'src/styles/Calification.sass';
import $ from 'jquery';
import LanguageUtils from "src/utils/LanguageUtils";


export default class Calification extends Component {

    state = {
        lang: this.props.lang
    }

    content = {
        es: {
            message: 'Agradeceria que califiques mi CV',
            thanksMessage: '¡Gracias por calificar!',
            note: 'No se podra calificar una segunda vez'
        },
        en: {
            message: 'I would appreciate if you rate my CV',
            thanksMessage: 'Thanks for rating!',
            note: 'It will not be possible to qualify a second time'
        }
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
        let content = LanguageUtils.getContent(this.props.lang, this.content);
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
        setTimeout(function() {
            let ratingContainer = $('.rating-container');
            ratingContainer.fadeOut(500, function() {
                let span = ratingContainer.parent().find('span').first();
                span.text(content.thanksMessage);
                setTimeout(function() {
                    $('.calification').slideUp(200);
                }, 1000);
            });
        }, 1000);
    }

    render() {
        let content = LanguageUtils.getContent(this.props.lang, this.content);
        return(
            <section className="calification">
                <div className="container-fluid mt-80px">
                    <div className="row justify-content-center align-items-center mtu-row">
                        <div className="col-xl"></div>
                        <div className="col-xl text-center">
                            <span>{content.message}</span>
                            <div className="rating-container">
                                <div className="rating">
                                    <span onClick={this.handleClick} data-star="5" className="far fa-star"></span>
                                    <span onClick={this.handleClick} data-star="4" className="far fa-star"></span>
                                    <span onClick={this.handleClick} data-star="3" className="far fa-star"></span>
                                    <span onClick={this.handleClick} data-star="2" className="far fa-star"></span>
                                    <span onClick={this.handleClick} data-star="1" className="far fa-star"></span>
                                </div>
                                <span>NOTE: {content.note}</span>
                            </div>
                        </div>
                        <div className="col-xl"></div>
                    </div>
                </div>
            </section>
        );
    }
}