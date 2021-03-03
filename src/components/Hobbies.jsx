import { Component } from "react";
import 'src/styles/Hobbies.sass';
import ReactHtmlParser from 'html-react-parser';
import { Language } from '@react-lang/language'

export default class Hobbies extends Component {

    content = {
        es: {
            machineLearning: {
                description: 'Uno de mis hobbies preferidos es el machine learning siempre soñe con tener mi propia inteligencia artificial, espero poder lograrlo.'
            },
            social: {
                title: 'Socializar',
                description: 'Siempre me gusto socialibilizar con personas y conocer gente nueva, fomentar la inclusion y crear espacios amigables.'
            },
            learn: {
                title: 'Aprender',
                description: 'Aprender nuevos metodos, nuevas tecnologias, nuevas formas de hacer algo, es algo que no solamente disfruto un monton, si no que tambien creo que es fundamental para seguir creciendo y no hay <strong>nada mejor que aprender disfrutando.</strong>'
            }
        },
        en: {
            machineLearning: {
                description: 'One of my favorite hobbies is machine learning. I always dreamed of having my own artificial intelligence, I hope I can achieve it.'
            },
            social: {
                title: 'Socialize',
                description: 'I always like to socialize with people and meet new people, encourage inclusion and create friendly spaces.'
            },
            learn: {
                title: 'Learn',
                description: 'Learning new methods, new technologies, new ways of doing something, is something that I not only enjoy a lot, but I also believe that it is essential to continue growing and <strong>there is nothing better than learning while enjoying.</strong>'
            }
        }
    }
    
    render() {
        return(
            <section className="hobbies">
                <div className="container mt-120px">
                    <div className="mtu-title">HOBBIES</div>
                    <div className="row justify-content-center align-items-center mtu-card">
                        <div className="col-xl-1"></div>
                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title mtu-card-title">
                                        Machine Learning{/*<span>-</span> <a href="https://github.com/martuuamengual" target="_blank">
                                            <img src={github}></img>
                                            <strong>GitHub</strong>
                                            </a>*/}
                                    </h5>
                                    <p className="card-text">
                                        <Language.Consumer>
                                            {({ get }) => (
                                                <span>{get(this.content, 'machineLearning.description')}</span>
                                            )}
                                        </Language.Consumer>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-1"></div>
                    </div>
                    <div className="row justify-content-center align-items-center mtu-card">
                        <div className="col-xl-1"></div>
                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body">
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <h5 className="card-title mtu-card-title mtu-hobbies-title">
                                                {get(this.content, 'social.title')}
                                            </h5>
                                        )}
                                    </Language.Consumer>
                                    <p className="card-text">
                                        <Language.Consumer>
                                            {({ get }) => (
                                                <span>{get(this.content, 'social.description')}</span>
                                            )}
                                        </Language.Consumer>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-1"></div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-1"></div>
                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body">
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <h5 className="card-title mtu-card-title mtu-hobbies-title">
                                                {get(this.content, 'learn.title')}
                                            </h5>
                                        )}
                                    </Language.Consumer>
                                    <p className="card-text">
                                        <Language.Consumer>
                                            {({ get }) => (
                                                <span>{ReactHtmlParser(get(this.content, 'learn.description'))}</span>
                                            )}
                                        </Language.Consumer>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-1"></div>
                    </div>
                </div>
            </section>
        );
    }
}