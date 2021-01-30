import { Component } from "react";
import university from 'src/images/university.svg'

export default class Education extends Component {

    state = {
        lang: this.props.lang
    }

    language = {
        'es': {
            'title': 'EDUCACION',
            'primary': {
                'title-description': 'Primaria',
                'description': 'Complete mis estudios primarios con un promedio de 7.5'
            },
            'secondary': {
                'title-description': 'Secundaria',
                'description': 'Complete mis estudios secundarios con especialidad en tecnico electronico con un promedio de 7.02'
            },
            'tertiary': {
                'title-description': 'Autodidacta'
            }
        },
        'en': {
            'title': 'EDUCATION',
            'primary': {
                'title-description': 'Elementary School',
                'description': 'I completed my primary studies with a 7.5 GPA'
            },
            'secondary': {
                'title-description': 'Middle School',
                'description': 'I completed my secondary studies with a specialty in electronic technician with an average of 7.02'
            },
            'tertiary': {
                'title-description': 'Autodidact'
            }
        }
    }

    getTertiaryDescription() {
        if (this.state.lang === 'es') {
            return(
                <span>
                    En esta etapa de mi vida fui a algunas universidades, pero ninguna me termino
                    gustando asi que me dedique a <strong>trabajar</strong> y a <strong>seguir aprendiendo por mi cuenta</strong>
                </span>
            );
        } else {
            return(
                <span>
                    At this stage of my life I went to some universities, but I ended up liking none so I dedicated myself to <strong>working</strong> and <strong>continuing to learn on my own</strong>
                </span>
            );
        }
    }

    render() {
        return (
            <section className="education">
                <div className="container mt-120px">
                    <div className="mtu-title">{this.language[this.state.lang]['title']}</div>
                    <div className="row justify-content-center align-items-center mtu-education">
                        <div className="col-xl">
                            <div className="card" style={{ height: "214px" }}>
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2005-2010</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={university} alt="univerisity"/>
                                        Inst. La Salle Florida, Buenos aires - {this.language[this.state.lang]['primary']['title-description']}
                                    </p>
                                    <p className="card-text">
                                        {this.language[this.state.lang]['primary']['description']}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2011-2017</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={university} alt="univerisity"/>
                                        Inst. La Salle Florida, Buenos aires - {this.language[this.state.lang]['secondary']['title-description']}
                                    </p>
                                    <p className="card-text">
                                        {this.language[this.state.lang]['secondary']['description']}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2017-2021</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={university} alt="univerisity"/>
                                        {this.language[this.state.lang]['tertiary']['title-description']}
                                    </p>
                                    <p className="card-text">
                                        {this.getTertiaryDescription()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}