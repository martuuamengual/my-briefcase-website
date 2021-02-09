
import React, { Component } from 'react'
import '../styles/Intro.sass'
import location from '../images/location.svg'
import ModalImage from './ModalImage';

export default class Intro extends Component {

    state = {
        lang: this.props.lang,
        name: 'MARTIN',
        surname: 'AMENGUAL',
        location: 'Buenos aires, Argentina'
    };

    getDescription() {
        if (this.state.lang === 'es') {
            return (
                <span>
                    Hola, bienvenid@ me llamo Martin tengo 22 años 
                    y soy desarrollador de sistemas informáticos. Aprendí a programar 
                    a los 8 años en C++, programé calculadoras, sistemas de cálculo matemático 
                    sencillo, etc. En la secundaria me especialicé en <strong>electrónica</strong>,
                    ahí desarrollé y programé algunos robots y obtuvimos el 4to puesto
                    en <strong>laberinto</strong> en la <strong>liga nacional de robotica</strong> <ModalImage 
                    id="modal-myImg" id-btn="myImg1" text="(ver imagen)" 
                    src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" 
                    alt="Example text2"></ModalImage>. 
                    Actualmente me encuentro aprendiendo nuevas tecnologías. Me considero una persona 
                    amable, cálida, aplicada y con muchas ganas de seguir aprendiendo. Si quieres me puedes <a href="#"><strong>contactar</strong></a> 😊
                </span>
            );
        } else {
            return (
                <span>
                    Hi, welcome my name is Martin I am 22 years old and I am a computer systems developer. 
                    I learned to program at the age of 8 in C++, I programmed calculators, simple mathematical calculation systems, 
                    etc. In high school I specialized in <strong>electronics</strong>, there I developed and programmed 
                    some robots and we obtained the 4th place in <strong>labyrinth</strong> in the <strong>national league of robotics</strong> <ModalImage 
                    id="modal-myImg" id-btn="myImg1" text="(see image)" 
                    src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" 
                    alt="Example text2"></ModalImage>. 
                    I am currently learning new technologies. I consider myself a kind, warm, applied person and eager to continue learning. If you want you can <a href="#"><strong>contact me</strong></a> 😊
                </span>
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
                                {this.getDescription()}
                            </div>
                        </div>
                        <div className="col-xl"></div>
                    </div>
                </div>
            </section>
        );
    }
}