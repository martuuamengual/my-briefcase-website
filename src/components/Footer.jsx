import React, { Component } from "react";
import 'src/styles/Footer.sass'
import { Language } from '@react-lang/language'
import { ReactComponent as Linkedin } from 'src/images/linkedin.svg'
import { ReactComponent as GitHub } from 'src/images/GitHub.svg'


export default class Footer extends Component {

    content = {
        en: {
            languageSelected: 'English'
        },
        es: {
            languageSelected: 'Spanish'
        }
    }

    constructor(props) {
        super(props)
        this.yearRef = React.createRef()
    }

    componentDidMount() {
        this.displayCurrentYear()
    }

    displayCurrentYear() {
        fetch('http://worldclockapi.com/api/json/utc/now').then((response) => {

            if (response.ok) {
                return response.json()
            }

            throw new Error('Something was wrong')
        }).then((data) => {
            this.yearRef.current.innerText = new Date(data.currentDateTime).getFullYear()
        }).catch(() => {
            this.yearRef.current.innerText = new Date().getFullYear()
        })
    }

    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-3 mb-4 mb-xl-0">
                            <a className="linkedin" href="https://www.linkedin.com/in/martin-amengual-680a59138/" target="_blank">
                                <Linkedin />
                            </a>
                            <a className="github" href="https://github.com/martuuamengual" target="_blank">
                                <GitHub />
                            </a>
                        </div>
                        <div className="col-xl-6">
                        <span className="float-center">Created by <strong>Martin Amengual</strong>. All rights reserved © <span ref={this.yearRef}></span></span>
                        </div>
                        <div className="col-xl-3 mt-4 mt-xl-0">
                            <div className="dropdown dropup float-center" style={{ marginRight: "1rem" }}>
                                <span style={{ marginRight: "1rem" }}>Language:</span>
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <Language.Consumer>
                                        {({ get }) => (
                                            <span>{get(this.content, 'languageSelected')}</span>
                                        )}
                                    </Language.Consumer>
                                </button>
                                <Language.Consumer>
                                    {({ handleSetLanguage }) => (
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleSetLanguage('en')} >English</a>
                                            <a className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => handleSetLanguage('es')}>Spanish</a>
                                        </div>
                                    )}
                                </Language.Consumer>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}