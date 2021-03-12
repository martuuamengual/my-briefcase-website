import { Component } from "react";
import briefcase from 'src/images/briefcase.svg'
import { Language } from '@react-lang/language'

export default class Experience extends Component {

    content = {
        en: {
            title: 'EXPERIENCE',
            firstCard: {
                description: 'Languages ​​I learned'
            },
            secondCard: {
                li0: 'Mas de 3 años en la empresa',
                li1: 'Allí aprendí',
                li2: 'Procesos de revisión de código (Pull requests)',
                li3: 'Programación de API REST en Java',
            },
            thirdCard: {
                title: 'Autodidact',
                description: 'Some of the languages ​​I learned are'
            }
        },
        es: {
            title: 'EXPERIENCIA',
            firstCard: {
                description: 'Lenguajes que aprendí'
            },
            secondCard: {
                li0: 'More than 3 years in the company',
                li1: 'There I learned',
                li2: 'Code review processes (Pull requests)',
                li3: 'Development of API REST in Java',
            },
            thirdCard: {
                title: 'Autodidacta',
                description: 'Algunos de los lenguajes que aprendi son'  
            }
        }
    }

    render() {
        return (
            <section className="experience">
                <div className="container mt-120px">
                    <Language.Consumer>
                        {({ get }) => (
                            <div className="mtu-title">{get(this.content, 'title')}</div>
                        )}
                    </Language.Consumer>
                    <div className="row equal">
                        <div className="col-xl-4 d-flex">
                            <div className="card flex-fill">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2011-2017</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={briefcase} alt="briefcase"/>
                                        Inst. La Salle Florida, Buenos aires
                                    </p>
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <div className="card-text">
                                                {get(this.content, 'firstCard.description')}:
                                                <ul>
                                                    <li>Assembler</li>
                                                    <li>C++</li>
                                                </ul>
                                            </div>
                                        )}
                                    </Language.Consumer>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mt-xl-0 mt-5 d-flex">
                            <div className="card flex-fill">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2017-2020</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={briefcase} alt="briefcase"/>
                                        Docturno, Buenos aires - <a href="http://docturno.com" target="_blank"><span>(Visit)</span></a>
                                    </p>
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <div className="card-text">
                                                <ul>
                                                    <li>{get(this.content, 'secondCard.li0')}</li>
                                                </ul>
                                                {get(this.content, 'secondCard.li1')}:
                                                <ul>
                                                    <li>Java (backend)</li>
                                                    <li>Node (frontend)</li>
                                                    <li>MongoDB</li>
                                                    <li>DevOps (Aws, Heroku)</li>
                                                    <li>{get(this.content, 'secondCard.li2')}</li>
                                                    <li>{get(this.content, 'secondCard.li3')}</li>
                                                </ul>
                                            </div>
                                        )}
                                    </Language.Consumer>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mt-xl-0 mt-5 d-flex">
                            <div className="card flex-fill">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2017-2021</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={briefcase} alt="briefcase"/>
                                        <Language.Consumer>
                                            {({ get }) => (
                                                <span>{get(this.content, 'thirdCard.title')}</span>
                                            )}
                                        </Language.Consumer>
                                    </p>
                                    <div className="card-text">
                                        <Language.Consumer>
                                            {({ get }) => (
                                                <span>{get(this.content, 'thirdCard.description')}:</span>
                                            )}
                                        </Language.Consumer>
                                        <ul>
                                            <li>React</li>
                                            <li>Angular</li>
                                            <li>Python</li>
                                            <li>Javascript</li>
                                            <li>TypeScript</li>
                                            <li>C#</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}