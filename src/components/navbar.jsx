
import '../styles/NavBar.scss'

export default function NavBar() {

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark mtu-navbar">
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
                                <div className="col-md-auto mt-2 mt-md-0">
                                    <a href="#" className="mtu-nav-btn">Intro</a>
                                </div>
                                <div className="col-md-auto mt-3 mt-md-0">
                                    <a href="#" className="mtu-nav-btn">Info</a>
                                </div>
                                <div className="col-md-auto mt-3 mt-md-0">
                                    <a href="#" className="mtu-nav-btn">Skills</a>
                                </div>
                                <div className="col-md-auto mt-3 mt-md-0 mb-2 mb-md-0">
                                    <a href="#" className="mtu-nav-btn">Briefcase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}