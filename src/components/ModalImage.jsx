import { Component } from "react";
import 'Styles/ModalImage.sass'


export default class ModalImage extends Component {

    handleClick = (data) => {
        //let modal = event.target.href;
        let a = data.target.parentElement;
        let modal = a.parentElement;

        
        let modal_content = modal.querySelector('.mtu-modal-content');
        modal_content.style.display = "block";

        var span = modal_content.querySelector('.close');
        span.onclick = function () {
            modal_content.style.display = "none";
        }
    }

    render() {
        return (
            <section className="mtu-modal-section">
                <div id={'modal-image-' + this.props.id} className="mtu-modal">
                    <a id={this.props['id-btn']} href="#" onClick={this.handleClick}>
                        <span>{this.props.text}</span>
                    </a>
                    <div className="mtu-modal-content">
                        <span className="close">&times;</span>
                        <img className="modal-image" src={this.props.src} id="img01" />
                        <div id="caption">{this.props.alt}</div>
                    </div>
                </div>
            </section>
        );
    }
}