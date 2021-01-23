import { Component } from "react";
import 'src/styles/LanguageButton.sass';


export default class LanguageButton extends Component {

    render() {
        return(
            <section>
                <div class="dropdown dropup language-select">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Spanish
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </section>
        );
    }
}