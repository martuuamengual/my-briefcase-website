import { Component } from "react";
import 'src/styles/index.scss';
import 'src/styles/Landing.sass';
import Education from 'src/components/Education';
import Skills from 'src/components/Skills';
import Footer from 'src/components/Footer';
import Intro from 'src/components/Intro';
import NavBar from 'src/components/navbar/NavBar';
import Experience from "src/components/Experience";
import Hobbies from "src/components/Hobbies";
import Briefcase from "src/components/Briefcase";
import Calification from "src/components/Calification";
import Contact from "src/components/Contact";

import store from 'src/redux/Contact/store'
import { Provider } from 'react-redux'

export default class Landing extends Component {

    componentDidMount() {
        document.title = 'CV - Martin Amengual'
    }

    render() {
        return(
            <section>
                <NavBar lang={this.props.lang}></NavBar>
                <Intro lang={this.props.lang}></Intro>
                <Education lang={this.props.lang}></Education>
                <Experience lang={this.props.lang}></Experience>
                <Skills lang={this.props.lang}></Skills>
                <Hobbies lang={this.props.lang}></Hobbies>
                <Briefcase lang={this.props.lang}></Briefcase>
                <Calification lang={this.props.lang}></Calification>
                <Provider store={store}>
                    <Contact lang={this.props.lang}></Contact>
                </Provider>
                <Footer lang={this.props.lang}></Footer>
            </section>
        );
    }

}