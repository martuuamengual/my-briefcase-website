
import React, { Component } from 'react'
import '../styles/Intro.scss'
import location from '../images/location.svg'
import cellphone from '../images/cellphone.svg'

export default class Intro extends Component {
    state = {
        name: 'MARTINA',
        surname: 'AMENGUAL',
        location: 'Buenos aires, Argentina',
        phone: '(+54) 1134793609',
        description: 'Hola, me llamo martina soy una chica lgbt'
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center">


                    <div className="col-lg">
                    </div>
                    <div className="col-lg-offset mt-3 mt-lg-0">
                        <a href="#" className="mtu-intro-icon d-block">
                            <img src={location} alt="location"></img>
                            <span>{this.state.location}</span>
                        </a>
                        <a href="#" className="mtu-intro-icon d-block">
                            <img src={cellphone} alt="cell-phone"></img>
                            <span>{this.state.phone}</span>
                        </a>
                        <a href="#" className="mtu-intro-icon d-block">
                            <img src={cellphone} alt="cell-phone"></img>
                            <span>(+54) 1134793609</span>
                        </a>
                        <a href="#" className="mtu-intro-icon d-block">
                            <img src={cellphone} alt="cell-phone"></img>
                            <span>(+54) 1134793609</span>
                        </a>
                    </div>
                    <div className="col-lg-1"></div>


                    <div className="col-xl-1 col-lg mt-5 mt-lg-0">
                    </div>
                    <div className="col-lg-offset">
                        <div className="mtu-intro-foto shadow"></div>
                    </div>
                    <div className="col-lg">
                    </div>





                    <div className="col-lg">
                    </div>
                    <div className="col-lg-offset mt-5 mt-lg-0">
                        <span className="mtu-intro-name">{this.state.name}</span>
                        <br></br>
                        <span className="mtu-intro-name">{this.state.surname}</span>
                    </div>
                    <div className="col-lg">
                    </div>
                </div>
                <div className="row mt-4 justify-content-center align-items-center text-center">
                    <div className="col-lg"></div>
                    <div className="col-lg-offset" style={{ maxWidth: "70%" }}>
                        <div className="mtu-intro-description shadow-sm">
                            {this.state.description}
                        </div>
                    </div>
                    <div className="col-lg"></div>
                </div>
            </div>
        );
    }
}