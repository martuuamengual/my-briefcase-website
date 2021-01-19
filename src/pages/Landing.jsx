import { Component } from "react";
import 'src/styles/index.scss';
import Education from 'src/components/Education';
import Footer from 'src/components/Footer';
import Intro from 'src/components/Intro';
import NavBar from 'src/components/navbar/NavBar';

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
                <Footer></Footer>
            </section>
        );
    }
}