import { Component } from "react";
import university from 'src/images/university.svg';
import ReactHtmlParser from 'html-react-parser';
import { Language } from '@react-lang/language'

export default class Education extends Component {

    content = {
        es: {
            title: 'EDUCACION',
            primary: {
                title_description: 'Primaria',
                description: 'Complete mis estudios primarios con un promedio de 7.5'
            },
            secondary: {
                title_description: 'Secundaria',
                description: 'Complete mis estudios secundarios con especialidad en tecnico electronico con un promedio de 7.02'
            },
            tertiary: {
                title_description: 'Autodidacta',
                description: 'En esta etapa de mi vida fui a algunas universidades, pero ninguna me termino gustando asi que me dedique a <strong>trabajar</strong> y a <strong>seguir aprendiendo por mi cuenta</strong>'
            }
        },
        en: {
            title: 'EDUCATION',
            primary: {
                title_description: 'Elementary School',
                description: 'I completed my primary studies with a 7.5 GPA'
            },
            secondary: {
                title_description: 'Middle School',
                description: 'I completed my secondary studies with a specialty in electronic technician with an average of 7.02'
            },
            tertiary: {
                title_description: 'Autodidact',
                description: 'At this stage of my life I went to some universities, but I ended up liking none so I dedicated myself to <strong>working</strong> and <strong>continuing to learn on my own</strong>'
            }
        }
    }
    

    render() {
        return (
            <Language.Consumer>
                {({ get }) => (
                    <section className="education">
                        <div className="container mt-120px">
                            <div className="mtu-title">{get(this.content, 'title')}</div>
                            <div className="row justify-content-center align-items-center mtu-education">
                                <div className="col-xl">
                                    <div className="card" style={{ height: "214px" }}>
                                        <div className="card-body">
                                            <h5 className="card-title mtu-card-title">2005-2010</h5>
                                            <p className="card-text mtu-card-text">
                                                <img src={university} alt="univerisity"/>
                                                Inst. La Salle Florida, Buenos aires - {get(this.content, 'primary.title_description')}
                                            </p>
                                            <p className="card-text">
                                                {get(this.content, 'primary.description')}
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
                                                Inst. La Salle Florida, Buenos aires - {get(this.content, 'secondary.title_description')}
                                            </p>
                                            <p className="card-text">
                                                {get(this.content, 'secondary.description')}
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
                                                {get(this.content, 'tertiary.title_description')}
                                            </p>
                                            <p className="card-text">
                                                {ReactHtmlParser(get(this.content, 'tertiary.description'))}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </Language.Consumer>
        );
    }
}