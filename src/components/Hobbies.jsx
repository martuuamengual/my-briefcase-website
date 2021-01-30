import { Component } from "react";
import 'src/styles/Hobbies.sass';
import github from 'src/images/GitHub.svg'


export default class Hobbies extends Component {
    
    state = {
        lang: this.props.lang
    }

    language = {
        'es': {
            
        }
    }

    getMLDescription() {
        return(
            <span>
                <p className="card-text">
                    asdasdasd
                </p>
                <p className="card-text">
                    <a href="#"><strong>GitHub</strong></a>
                </p>
            </span>
        );
    }
    
    render() {
        return(
            <section className="hobbies">
                <div className="container mt-120px">
                    <div className="mtu-title">HOBBIES</div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title mtu-card-title mtu-hobbies-title">
                                        Machine Learning <span>-</span> <a href="https://github.com/martuuamengual" target="_blank">
                                            <img src={github}></img>
                                            <strong>GitHub</strong>
                                            </a>
                                    </h5>
                                    {this.getMLDescription()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}