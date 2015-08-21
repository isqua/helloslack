import querystring from 'querystring';
import request from './request.es6';

function defaultGetMessage() {
    return 'Hello, *Slack*!';
}

export default class SlackBot {
    constructor(domain, token) {
        this.domain = domain;
        this.token = token;
    }

    postMessage(destination = '#general', getMessage = defaultGetMessage) {
        var message = getMessage(),
            opts = this.getRequestOptions(destination, message);

        return request(opts, message);
    }

    getRequestOptions(destination, message) {
        return {
            hostname: this.domain,
            port: '443',
            path: '/services/hooks/slackbot?' + querystring.stringify({
                token: this.token,
                channel: destination
            }),
            method: 'POST',
            headers: {
                'Content-Length': message.length
            }
        };
    }
}
