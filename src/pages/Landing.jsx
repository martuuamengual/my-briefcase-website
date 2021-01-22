import { Component } from "react";
import 'src/styles/index.scss';
import 'src/styles/Landing.sass';
import Education from 'src/components/Education';
import Skills from 'src/components/Skills';
import Footer from 'src/components/Footer';
import Intro from 'src/components/Intro';
import NavBar from 'src/components/navbar/NavBar';
import Experience from "src/components/Experience";

export default class Landing extends Component {
    componentDidMount() {
        document.title = 'CV - Martin Amengual'
    }

    render() {
        return(
            <section>
                <NavBar></NavBar>
                <Intro></Intro>
                <Education></Education>
                <Experience></Experience>
                <Skills></Skills>
                <Footer></Footer>
            </section>
        );
    }
}