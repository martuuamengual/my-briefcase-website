import { Component } from "react";
import briefcase from 'Images/briefcase.svg'
import LanguageUtils from "Utils/LanguageUtils";

export default class Experience extends Component {

    state = {
        lang: this.props.lang
    }

    content = {
        en: {
            title: 'EXPERIENCE',
            firstCard: {
                description: 'Languages ​​I learned'
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
            thirdCard: {
                title: 'Autodidacta',
                description: 'Algunos de los lenguajes que aprendi son'  
            }
        }
    }

    getSecondCardDescription() {
        if (this.state.lang === 'es') {
            return (
                <span>
                    <ul>
                        <li>Mas de 3 años en la empresa</li>
                    </ul>
                    Allí aprendí:
                    <ul>
                        <li>Java (backend)</li>
                        <li>Node (frontend)</li>
                        <li>MongoDB</li>
                        <li>DevOps (Aws, Heroku)</li>
                        <li>Procesos de revisión de código (Pull requests)</li>
                        <li>Programación de API REST en Java</li>
                    </ul>
                </span>
            );
        } else {
            return (
                <span>
                    <ul>
                        <li>More than 3 years in the company</li>
                    </ul>
                    There I learned:
                    <ul>
                        <li>Java (backend)</li>
                        <li>Node (frontend)</li>
                        <li>MongoDB</li>
                        <li>DevOps (Aws, Heroku)</li>
                        <li>Code review processes (Pull requests)</li>
                        <li>Development of API REST in Java</li>
                    </ul>
                </span>
            );
        }
    }

    render() {
        let content = LanguageUtils.getContent(this.state.lang, this.content);
        return (
            <section className="experience">
                <div className="container mt-120px">
                    <div className="mtu-title">{content.title}</div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl">
                            <div className="card" style={{ height: '375px' }}>
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2011-2017</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={briefcase} alt="briefcase"/>
                                        Inst. La Salle Florida, Buenos aires
                                    </p>
                                    <div className="card-text">
                                        {content.firstCard.description}:
                                        <ul>
                                            <li>Assembler</li>
                                            <li>C++</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <div className="card" style={{ height: '375px' }}>
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2017-2020</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={briefcase} alt="briefcase"/>
                                        Docturno, Buenos aires - <a href="http://docturno.com" target="_blank"><span>(Visit)</span></a>
                                    </p>
                                    <div className="card-text">
                                        {this.getSecondCardDescription()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <div className="card" style={{ height: '375px' }}>
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">2017-2021</h5>
                                    <p className="card-text mtu-card-text">
                                        <img src={briefcase} alt="briefcase"/>
                                        {content.thirdCard.title}
                                    </p>
                                    <div className="card-text">
                                        {content.thirdCard.description}:
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