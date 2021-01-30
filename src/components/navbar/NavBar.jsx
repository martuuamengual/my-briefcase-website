
import { Component } from 'react'
import '../../styles/NavBar.sass'
import NavBarButton from './NavBarButton';

export default class NavBar extends Component {

    state = {
        lang: this.props.lang
    }
    
    language = {
        'es': {
            'education': 'Educacion',
            'experience': 'Experiencia',
            'skills': 'Habilidades',
            'hobbies': 'Hobbies',
            'briefcase': 'Portafolio',
            'contact': 'Contacto'
        },
        'en': {
            'education': 'Education',
            'experience': 'Experience',
            'skills': 'Skills',
            'hobbies': 'Hobbies',
            'briefcase': 'Briefcase',
            'contact': 'Contact'
        }
    }

    handleIntro = (event) => {
        event.preventDefault();
        let intro = document.getElementsByTagName('body')[0];
        intro.scrollIntoView({behavior: 'smooth'});
    }

    handleEducation = (event) => {
        event.preventDefault();
        let education = document.getElementsByClassName('education')[0];
        education.scrollIntoView({behavior: 'smooth'});
    }

    handleExperience = (event) => {
        event.preventDefault();
        let experience = document.getElementsByClassName('experience')[0];
        experience.scrollIntoView({behavior: 'smooth'});
    }

    handleSkills = (event) => {
        event.preventDefault();
        let skills = document.getElementsByClassName('skills')[0];
        skills.scrollIntoView({behavior: 'smooth'});
    }

    handleHobbys = (event) => {
        event.preventDefault();
        let hobbies = document.getElementsByClassName('hobbies')[0];
        hobbies.scrollIntoView({behavior: 'smooth'});
    }

    handleBriefcase = (event) => {
        event.preventDefault();
        let briefcase = document.getElementsByClassName('briefcase')[0];
        briefcase.scrollIntoView({behavior: 'smooth'});
    }

    handleContact = (event) => {
        event.preventDefault();
        let contact = document.getElementsByClassName('contact')[0];
        contact.scrollIntoView({behavior: 'smooth'});
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
                                    <NavBarButton onClick={this.handleEducation} href="#" text={this.language[this.state.lang]['education']}></NavBarButton>
                                    <NavBarButton onClick={this.handleExperience} href="#" text={this.language[this.state.lang]['experience']}></NavBarButton>
                                    <NavBarButton onClick={this.handleSkills} href="#" text={this.language[this.state.lang]['skills']}></NavBarButton>
                                    <NavBarButton onClick={this.handleHobbys} href="#" text={this.language[this.state.lang]['hobbies']}></NavBarButton>
                                    <NavBarButton onClick={this.handleBriefcase} href="#" text={this.language[this.state.lang]['briefcase']}></NavBarButton>
                                    <NavBarButton onClick={this.handleContact} className="mb-2 mb-md-0" href="#" text={this.language[this.state.lang]['contact']}></NavBarButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}