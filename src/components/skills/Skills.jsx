import React, { Component } from "react";
import 'src/styles/Skills.sass';
import ProgressBar from 'src/components/ProgressBar';


export default class Skills extends Component {

    render() {
        return(
            <section className="skills">
                <div className="container mt-120px">
                    <div className="mtu-title">SKILLS</div>
                    <div className="row justify-content-center align-items-center mtu-skills">
                        <div className="col-xl">
                            <ProgressBar value="80" text="GIT"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-4">
                            <ProgressBar value="60" text="AFFINITY DESIGNER"></ProgressBar>
                        </div>
                        <div className="col-xl mt-xl-0 mt-4">
                            <ProgressBar value="30" text="React"></ProgressBar>
                        </div>
                    </div>
                </div>
            </section>
        );
    } 
}