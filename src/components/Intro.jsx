
import React, { Component } from 'react'
import '../styles/Intro.sass'
import location from '../images/location.svg'
import cellphone from '../images/cellphone.svg'

export default class Intro extends Component {

    componentDidMount() {
        document.title = 'CV - Martina Amengual'
    }

    state = {
        name: 'MARTINA',
        surname: 'AMENGUAL',
        location: 'Buenos aires, Argentina',
        description: 'Hola, bienvenid@ me llamo martina, soy una mujer transexual y tengo actualmente 22 años. Aprendi a programar a los 8 años'
    };

    render() {
        return (
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
                        <a href="https://goo.gl/maps/9FcCa95YWViybffL7" target="_blank" className="mtu-intro-icon">
                            <img src={location} alt="Location"></img>
                            <span>{this.state.location}</span>
                        </a>
                    </div>
                    <div className="col-lg">
                    </div>
                </div>
                <div className="row mt-4 justify-content-center align-items-center text-center">
                    <div className="col-lg"></div>
                    <div className="col-lg-offset" style={{ maxWidth: "70%" }}>
                        <div className="mtu-intro-description">
                            {this.state.description}
                        </div>
                    </div>
                    <div className="col-lg"></div>
                </div>
            </div>
        );
    }
}