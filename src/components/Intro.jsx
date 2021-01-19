
import React, { Component } from 'react'
import '../styles/Intro.sass'
import location from '../images/location.svg'
import ModalImage from './ModalImage';

export default class Intro extends Component {

    state = {
        name: 'MARTIN',
        surname: 'AMENGUAL',
        location: 'Buenos aires, Argentina'
    };

    render() {
        return (
            <section>
                <div className="container pt-lg-4">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg">
                            <span className="mtu-intro-name">{this.state.name}</span>
                        </div>
                        <div className="col-lg-offset">
                            <div className="mtu-intro-foto shadow"></div>
                        </div>
                        <div className="col-lg">
                        <span className="mtu-intro-name">{this.state.surname}</span>
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center align-items-center text-center">
                        <div className="col-lg">
                        </div>
                        <div className="col-lg-offset">
                            <a href="https://goo.gl/maps/9FcCa95YWViybffL7" target="_blank" className="mtu-intro-icon d-block">
                                <img src={location} alt="Location"></img>
                                <span>{this.state.location}</span>
                            </a>
                            <span className="d-block mt-2">Web Developer</span>
                            <span className="d-block mt-2">(Current-Job) Not-Employed</span>
                        </div>
                        <div className="col-lg">
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center align-items-center text-center">
                        <div className="col-lg"></div>
                        <div className="col-lg-offset" style={{ maxWidth: "70%" }}>
                            <div className="mtu-intro-description">
                                Hola, bienvenid@ me llamo martin tengo 22 años 
                                y soy desarrollador de sistemas informaticos. Aprendi a programar 
                                a los 8 años en C++, programe calculadoras, sistemas de calculo matematico 
                                sensillo, etc. En la secundaria me especialize en <strong>electronica</strong>,
                                ahi desarroye y programe algunos robots y obtuvimos el 4to puesto <ModalImage 
                                id="asd1" id-btn="myImg1" text="(ver imagen)" 
                                src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" 
                                alt="Example text2"></ModalImage>. 
                                Actualmente me encuentro aprediendo nuevas tecnologias. Soy una persona 
                                amable, calida y aplicada. Si quieres me puedes <a href="#"><strong>contactar</strong></a> 😊
                            </div>
                        </div>
                        <div className="col-lg"></div>
                    </div>
                </div>
            </section>
        );
    }
}