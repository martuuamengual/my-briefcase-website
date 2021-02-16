import { Component } from "react";


export default class Mailgun extends Component {
    
    componentDidMount() {
        console.log('asd');

        /*data = {
            asd: 'asd'
        };

        domain = 'sandboxec409549fbf347c09e765fff1c403d86.mailgun.org';

        console.log('https://api.mailgun.net/v3/${domain}/messages')

        /*fetch('https://api.mailgun.net/v3/${domain}/messages').then(function(info) {
            console.log(info);
        })*/
    }

    render() {
        return(
            <div>mailgun test</div>
        );
    }

}
