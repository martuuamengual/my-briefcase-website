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
import GoTop from "src/components/GoTop";


export default class Landing extends Component {

    componentDidMount() {
        document.title = 'CV - Martin Amengual'
    }

    render() {
        return(
            <section>
                <NavBar />
                <Intro />
                <Education />
                <Experience />
                <Skills />
                <Hobbies />
                <Briefcase />
                <Calification />
                <Contact />
                <Footer />
                <GoTop />
            </section>
        );
    }

}