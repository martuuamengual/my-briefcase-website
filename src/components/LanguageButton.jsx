import { Component } from "react";
import 'Styles/LanguageButton.sass';


export default class LanguageButton extends Component {

    render() {
        return(
            <section>
                <div className="dropdown dropup language-select">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Spanish
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </section>
        );
    }
}