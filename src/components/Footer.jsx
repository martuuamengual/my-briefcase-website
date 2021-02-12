import { Component } from "react";
import '../styles/Footer.sass'

export default class Footer extends Component {

    state = {
        lang: this.props.lang
    }

    getTextLanguageSelect() {
        if (this.state.lang === 'es') {
            return 'Spanish'
        } else {
            return 'English'
        }
    }

    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-3">
                        </div>
                        <div className="col-xl-6">
                        <span className="float-center">Created by <strong>Martin Amengual</strong>. All rights reserved © 2021</span>
                        </div>
                        <div className="col-xl-3 mt-4 mt-xl-0">
                            <div className="dropdown dropup float-center" style={{ marginRight: "1rem" }}>
                                <span style={{ marginRight: "1rem" }}>Language:</span>
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.getTextLanguageSelect()}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/">English</a>
                                    <a className="dropdown-item" href="/es">Spanish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}