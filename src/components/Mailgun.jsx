import { Component } from "react";
import { Mailgun as MailgunModel } from 'src/models/Mailgun.model';
import EnviromentUtils from "src/utils/EnviromentUtils";


export default class Mailgun extends Component {
    
    componentDidMount() {

        const API_KEY = EnviromentUtils.getValue('API_KEY');
        const DOMAIN = EnviromentUtils.getValue('DOMAIN');
        const SEND_EMAIL = EnviromentUtils.getBoolean('SEND_EMAIL');

        if (SEND_EMAIL) {
            const data = {
                from: 'INFO-CV <info@martu-amengual.cv>',
                to: 'martuu.amengual@gmail.com',
                subject: 'Martu testing this',
                text: 'JAJAJAJ'
            };
            
            let mailgun = new MailgunModel({api_key: API_KEY, domain: DOMAIN});
            mailgun.sendEmail(data).then(function(info) {
                console.log(info.json());
            });
        }
        
    }

    render() {
        return(
            <div>mailgun test</div>
        );
    }

}
