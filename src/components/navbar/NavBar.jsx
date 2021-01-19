
import { Component } from 'react'
import '../../styles/NavBar.sass'
import NavBarButton from './NavBarButton';

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light mtu-navbar">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Curriculum Vitae</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav mr-auto mb-2 mb-lg-0"></div>
                        <div className="d-flex">
                            <div className="container">
                                <div className="row">
                                    <NavBarButton href="#" text='Intro'></NavBarButton>
                                    <NavBarButton href="#" text='Education'></NavBarButton>
                                    <NavBarButton href="#" text='Skills'></NavBarButton>
                                    <NavBarButton href="#" text='Hobbys'></NavBarButton>
                                    <NavBarButton href="#" text='Briefcase'></NavBarButton>
                                    <NavBarButton className="mb-2 mb-md-0" href="#" text='Contact'></NavBarButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}