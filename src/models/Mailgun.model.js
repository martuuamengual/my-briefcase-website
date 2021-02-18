import StringUtils from "src/utils/StringUtils";


class Mailgun extends Object {
    
    constructor(keys) {
        super();
        this.keys = keys;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    sendEmail(data) {
        this.data = data;
        return this.make();
    }

    make() {
        let fullDomain = StringUtils.format('https://api.mailgun.net/v3/{0}/messages', this.keys.domain);
        let Authorization = btoa('api:' + this.keys.api_key)
        var formData = new FormData();
        formData.append('from', this.data.from);
        formData.append('to', this.data.to);
        formData.append('subject', this.data.subject);
        formData.append('text', this.data.text);
        let data = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Authorization': 'Basic ' + Authorization
            },
            body: formData
        };
        return fetch(fullDomain, data);
    }
}

export { Mailgun }