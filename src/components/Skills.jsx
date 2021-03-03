import React, { Component } from "react";
import ProgressBar from 'src/components/ProgressBar';
import { Language } from '@react-lang/language'

export default class Skills extends Component {

    content = {
        es: {
            title: 'HABILIDADES'
        },
        en: {
            title: 'SKILLS'
        }
    }

    render() {
        return(
            <section className="skills">
                <div className="container mt-120px">
                    <Language.Consumer>
                        {({ get }) => (
                            <div className="mtu-title">{get(this.content, 'title')}</div>
                        )}
                    </Language.Consumer>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl">
                            <ProgressBar value="80" text="GIT"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="60" text="Affinity Designer"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="60" text="React"></ProgressBar>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-xl">
                            <ProgressBar value="35" text="DevOps"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="40" text="UX Design"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="74" text="Boostrap"></ProgressBar>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-xl">
                            <ProgressBar value="90" text="Python"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="55" text="English"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="85" text="Javascript"></ProgressBar>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-xl">
                            <ProgressBar value="90" text="Java"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="70" text="Node"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="100" text="Spanish (native)"></ProgressBar>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-xl">
                            <ProgressBar value="60" text="MySql"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="85" text="MongoDB"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="30" text="TypeScript"></ProgressBar>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-xl">
                            <ProgressBar value="90" text="Html"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="70" text="Css"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-5">
                            <ProgressBar value="78" text="C#"></ProgressBar>
                        </div>
                    </div>
                </div>
            </section>
        );
    } 
}