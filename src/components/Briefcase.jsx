import { Component } from "react";
import github from 'src/images/GitHub.svg';
import npm from 'src/images/npm.svg';
import ReactHtmlParser from 'html-react-parser';
import { Language } from '@react-lang/language'


export default class Briefcase extends Component {

    content = {
        es: {
            title: 'PORTAFOLIO',
            amongUsHack: {
                description: 'Esta aplicacion fue creada en C#, <strong>unicamente con fines educativos</strong>. El hack muestra en la UI del usuario el nombre del impostor, ademas tiene implementado un <strong>pattern scaning</strong> para encontrar algunos valores de offests. Tambien le implemente un <strong>Non-Hook UI</strong> que permite mostrar la interfaz de usuario sin ser detectado por ningun anticheat.'
            },
            easyGui: {
                description: 'Esta libreria tambien esta escrita en C#, la desarrolle como complemento al <strong>Among Us Hack</strong>, adentro contiene componentes como botones o paneles con diseños curvos y con gradientes de colores'
            },
            dwap: {
                description1: 'Esta aplicacion esta escrita en python y selenium <strong>unicamente con fines educativos</strong>, su objetivo era <strong>enviar mensajes automaticos</strong>. Tambien tiene un componente de javascript, al abrir el navegador web con whatsapp, injectaba el codigo el cual permitia leer mensajes y contactos.',
                description2: '<strong>Por motivos legales y de seguridad ese codigo no puedo exponerlo.</strong>'
            },
            djax: {
                description: 'Esta aplicacion esta escrita en jquery y javascript, tiene como objetivo simplificar la carga de contenido html haciendo uso de la carga dinamica, esto se logra haciendo pequeños <strong>requests</strong> cuando el usuario necesite ese contenido DOM.'
            },
            "react-lang/language": {
                description: 'Esta aplicacion esta escrita en JS para <strong>React</strong>. Se encarga de <strong>manejar el idioma seleccionado</strong> dentro de la pagina. Ademas le da al programador una forma mas sencilla y eficaz de implementar el cambio de idioma.'
            },
            thisWebSite: {
                title: 'Esta Web',
                description: 'Siempre pienso en como mejorar mi presentacion como desarrollador web fullstack y verme cada vez mas <strong>profesional</strong>, es por eso que decidi crear esta web que estas visitando ahora mismo, espero que sea de tu agrado 😄. Esta desarrollada en <strong>React y NodeJS</strong> con una <strong>DB SQLite</strong> ya que para los datos que almaceno alli no necesitaba algo muy complejo.'
            }
        },
        en: {
            title: 'BRIEFCASE',
            amongUsHack: {
                description: 'This application was created in C#, <strong>for educational purposes only</strong>. The hack shows the impostor\'s name in the user\'s UI, it also has a <strong>scaning pattern</strong> implemented to find some offests values. I also implemented a <strong>Non-Hook UI</strong> that allows you to display the user interface without being detected by any anticheat.'
            },
            easyGui: {
                description: 'This library is also written in C#, I developed it as a complement to <strong>Among Us Hack</strong>, inside it contains components such as buttons or panels with curved designs and with color gradients.'
            },
            dwap: {
                description1: 'This application is written in python and selenium <strong>for educational purposes only</strong>, its objective was to <strong>send automatic messages</strong>. It also has a javascript component, when opening the web browser with whatsapp, it injected the code which allowed reading messages and contacts.',
                description2: '<strong>For legal and security reasons, I cannot expose that code.</strong>'
            },
            djax: {
                description: 'This application is written in jquery and javascript, its objective is to simplify the loading of html content by making use of dynamic loading, this is achieved by making small <strong>requests</strong> when the user needs that DOM content.'
            },
            "react-lang/language": {
                description: 'This application is written in JS for <strong>React</strong>. It is responsible for <strong>managing the selected language</strong> within the page. It also gives the programmer a simpler and more efficient way to implement the language change.'
            },
            thisWebSite: {
                title: 'This Web Site',
                description: 'I always think about how to improve my presentation as a fullstack web developer and see myself more and more <strong>professional</strong>, that is why I decided to create this website that you are visiting right now, I hope you like it 😄. It is developed in <strong>React and NodeJS</strong> with a <strong>SQLite DB</strong> since for the data that I store there I didn\'t need something very complex.'
            }
        }
    }
    
    render() {
        return(
            <section className="briefcase">
                <div className="container mt-120px">
                    <Language.Consumer>
                        {({ get }) => (
                            <div className="mtu-title">{get(this.content, 'title')}</div>
                        )}
                    </Language.Consumer>
                    <div className="row equal">
                        <div className="col-xl-4 mb-4 d-flex">
                            <div className="card mtu-card flex-fill">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">
                                        Among Us Hack <br /> <a href="https://github.com/martuuamengual/AmongUsHack" target="_blank">
                                            <img className="atenuate" src={github}></img>
                                            <strong>GitHub</strong>
                                            </a>
                                    </h5>
                                    <div className="card-text">
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <p>{ReactHtmlParser(get(this.content, 'amongUsHack.description'))}</p>
                                        )}
                                    </Language.Consumer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mb-4 d-flex">
                            <div className="card mtu-card flex-fill">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">
                                        EasyGUI <br /> <a href="https://github.com/martuuamengual/EasyGUI" target="_blank">
                                            <img className="atenuate" src={github}></img>
                                            <strong>GitHub</strong>
                                            </a>
                                    </h5>
                                    <div className="card-text">
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <p>{ReactHtmlParser(get(this.content, 'easyGui.description'))}</p>
                                        )}
                                    </Language.Consumer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mb-4 d-flex">
                            <div className="card mtu-card flex-fill">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">
                                        Dwap <br /> <a href="https://github.com/martuuamengual/dwap_python" target="_blank">
                                            <img className="atenuate" src={github}></img>
                                            <strong>GitHub</strong>
                                            </a>
                                    </h5>
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <div className="card-text">
                                                <p>{ReactHtmlParser(get(this.content, 'dwap.description1'))}</p>
                                                <p>{ReactHtmlParser(get(this.content, 'dwap.description2'))}</p>
                                            </div>
                                        )}
                                    </Language.Consumer>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mb-4 d-flex">
                            <div className="card mtu-card flex-fill">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">
                                        DJAX <br /> <a href="https://github.com/martuuamengual/jquery-djax" target="_blank">
                                            <img className="atenuate" src={github}></img>
                                            <strong>GitHub</strong>
                                            </a>
                                    </h5>
                                    <div className="card-text">
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <p>{ReactHtmlParser(get(this.content, 'djax.description'))}</p>
                                        )}
                                    </Language.Consumer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mb-4 d-flex">
                            <div className="card mtu-card flex-fill">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title">
                                        @react-lang/language <br /> <a href="https://www.npmjs.com/package/@react-lang/language" target="_blank">
                                            <img style={{ width: '30px' }} src={npm}></img>
                                            <strong>Npm</strong>
                                            </a>
                                    </h5>
                                    <div className="card-text">
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <p>{ReactHtmlParser(get(this.content, 'react-lang/language.description'))}</p>
                                        )}
                                    </Language.Consumer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mb-4 d-flex">
                            <div className="card mtu-card flex-fill">
                                <Language.Consumer>
                                    {({ get }) => (
                                        <div className="card-body">
                                            <h5 className="card-title mtu-card-title">
                                                {get(this.content, 'thisWebSite.title')} <br /> <a href="https://github.com/martuuamengual/my-briefcase-website" target="_blank">
                                                    <img className="atenuate" src={github}></img>
                                                    <strong>GitHub</strong>
                                                    </a>
                                            </h5>
                                            <div className="card-text">
                                                <p>{ReactHtmlParser(get(this.content, 'thisWebSite.description'))}</p>
                                            </div>
                                        </div>
                                    )}
                                </Language.Consumer>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}