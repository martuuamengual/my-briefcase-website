import { Component } from "react";
import 'src/styles/Hobbies.sass';
import github from 'src/images/GitHub.svg'
import LanguageUtils from "src/utils/LanguageUtils";


export default class Hobbies extends Component {
    
    state = {
        lang: this.props.lang
    }

    content = {
        es: {
            description: 'asdasdad'
        },
        en: {
            description: 'asdad'
        }
    }
    
    render() {
        let content = LanguageUtils.getContent(this.state.lang, this.content);
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
                                    <p className="card-text">
                                        {content.description}
                                    </p>
                                    <p className="card-text">
                                        <a href="#"><strong>GitHub</strong></a>
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