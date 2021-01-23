import { Component } from "react";
import '../styles/Footer.sass'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-8">
                            <span className="float-right">Created by <strong>Martin Amengual</strong>. All rights reserved © 2021</span>
                        </div>
                        <div className="col-xl-4">
                            <div class="dropdown dropup float-right" style={{ marginRight: "1rem" }}>
                                <span style={{ marginRight: "1rem" }}>Language:</span>
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Spanish
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">English</a>
                                    <a class="dropdown-item" href="#">Spanish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}