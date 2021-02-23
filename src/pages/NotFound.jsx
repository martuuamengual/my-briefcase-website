import { Component } from "react";
import { ReactComponent as ErrorIcon } from 'src/images/ErrorIcon.svg';
import 'src/styles/NotFound.sass';


export default class NotFound extends Component {

    componentDidMount() {
        document.title = '404 - Looks like you\'re lost'
        document.getElementById('root').style = "height: 100%";
        document.getElementsByTagName('body')[0].style = "height: 100%; padding-top: 0px !important";
        document.getElementsByTagName('html')[0].style = "height: 100%";
    }

    render() {
        return(
            <section className="not-found" style={{ height: '100%' }}>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-6">
                            <h1 className="title">404</h1>
                            <p className="description">Looks like you're lost</p>
                            <a href="/" className="button">GO HOME</a>
                        </div>
                        <div className="col">
                            <ErrorIcon />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}