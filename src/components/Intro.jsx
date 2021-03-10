
import React, { Component } from 'react'
import 'src/styles/Intro.sass'
import location from 'src/images/location.svg'
import ModalImage from './ModalImage';
import { Language } from '@react-lang/language'
import $ from 'jquery';

export default class Intro extends Component {

    state = {
        name: 'MARTIN',
        surname: 'AMENGUAL',
        location: 'Buenos aires, Argentina'
    };

    handleGoToContact = (event) => {
        event.preventDefault();

        let calification = $('.calification');

        if (calification.is(":visible")) {
            var headerOffset = 45;
            var elementPosition = calification.get(0).getBoundingClientRect().top;
            var offsetPosition = elementPosition - headerOffset;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            })
        } else {
            let contact = document.getElementsByClassName('contact')[0];
            contact.scrollIntoView({behavior: 'smooth'});
        }
    }

    getDescription(lang) {
        if (lang === 'es') {
            return (
                <p style={{ marginBottom: '0' }}>
                    Hola, bienvenid@ me llamo Martin tengo 22 años 
                    y soy desarrollador web. En la secundaria me especialicé en <strong>electrónica</strong>,
                    ahí desarrollé y programé algunos robots y obtuvimos el 4to puesto
                    en <strong>laberinto</strong> en la <strong>liga nacional de robotica</strong> <ModalImage 
                    id="modal-myImg" id-btn="myImg1" text="(ver imagen)" 
                    src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" 
                    alt="Example text2"></ModalImage>. 
                    Actualmente me encuentro aprendiendo nuevas tecnologías. Me considero una persona 
                    amable, cálida, aplicada y con muchas ganas de seguir aprendiendo. Si quieres me puedes <a href="#" onClick={this.handleGoToContact}><strong>contactar</strong></a> 😊
                </p>
            );
        } else {
            return (
                <p style={{ marginBottom: '0' }}>
                    Hi, welcome my name is Martin I am 22 years old and I am a web developer. In 
                    high school I specialized in <strong>electronics</strong>, there I developed and programmed 
                    some robots and we obtained the 4th place in <strong>labyrinth</strong> in the <strong>national league of robotics</strong> <ModalImage 
                    id="modal-myImg" id-btn="myImg1" text="(see image)" 
                    src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" 
                    alt="Example text2"></ModalImage>. 
                    I am currently learning new technologies. I consider myself a kind, warm, applied person and eager to continue learning. If you want you can <a href="#" onClick={this.handleGoToContact}><strong>contact me</strong></a> 😊
                </p>
            );
        }
    }

    render() {
        return (
            <section className="intro">
                <div className="container pt-xl-4">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-xl">
                            <span className="mtu-intro-name">{this.state.name}</span>
                        </div>
                        <div className="col-xl-offset">
                            <div className="mtu-intro-foto shadow"></div>
                        </div>
                        <div className="col-xl">
                            <span className="mtu-intro-name">{this.state.surname}</span>
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center align-items-center text-center">
                        <div className="col-xl">
                        </div>
                        <div className="col-xl-offset">
                            <a href="https://goo.gl/maps/9FcCa95YWViybffL7" target="_blank" className="mtu-intro-icon d-block">
                                <img src={location} alt="Location"></img>
                                <span>{this.state.location}</span>
                            </a>
                            <span className="d-block mt-2">Fullstack Developer</span>
                            <span className="d-block mt-2">Semi-Senior/Senior</span>
                            <span className="d-block mt-2">(Current-Job) Not-Employed</span>
                        </div>
                        <div className="col-xl">
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center align-items-center text-center">
                        <div className="col-xl"></div>
                        <div className="col-xl-offset" style={{ maxWidth: "70%" }}>
                            <div className="mtu-intro-description">
                                <Language.Consumer>
                                    {({ lang }) => (
                                        <span>{this.getDescription(lang)}</span>
                                    )}
                                </Language.Consumer>
                            </div>
                        </div>
                        <div className="col-xl"></div>
                    </div>
                </div>
            </section>
        );
    }
}