
import { Component } from 'react'
import '../../styles/NavBar.sass'
import NavBarButton from './NavBarButton';

export default class NavBar extends Component {

    handleIntro = (event) => {
        event.preventDefault();
        console.log('asdss')
    }

    handleEducation = (event) => {
        event.preventDefault();
        console.log('asdss')
    }

    handleExperience = (event) => {
        event.preventDefault();
        console.log('asdss')
    }

    handleSkills = (event) => {
        event.preventDefault();
        console.log('asdss')
    }

    handleHobbys = (event) => {
        event.preventDefault();
        console.log('asdss')
    }

    handleBriefcase = (event) => {
        event.preventDefault();
        console.log('asdss')
    }

    handleContact = (event) => {
        event.preventDefault();
        console.log('asdss')
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-xl navbar-light mtu-navbar">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Curriculum Vitae</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav mr-auto mb-2 mb-xl-0"></div>
                        <div className="d-flex">
                            <div className="container">
                                <div className="row">
                                    <NavBarButton onClick={this.handleIntro} href="#" text='Intro'></NavBarButton>
                                    <NavBarButton onClick={this.handleEducation} href="#" text='Education'></NavBarButton>
                                    <NavBarButton onClick={this.handleExperience} href="#" text='Experience'></NavBarButton>
                                    <NavBarButton onClick={this.handleSkills} href="#" text='Skills'></NavBarButton>
                                    <NavBarButton onClick={this.handleHobbys} href="#" text='Hobbys'></NavBarButton>
                                    <NavBarButton onClick={this.handleBriefcase} href="#" text='Briefcase'></NavBarButton>
                                    <NavBarButton onClick={this.handleContact} className="mb-2 mb-md-0" href="#" text='Contact'></NavBarButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}