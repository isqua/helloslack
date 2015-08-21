import querystring from 'querystring';
import events from 'events';
import WebSocket from 'ws';
import request from './request.es6';

export default class SlackRtm extends events.EventEmitter {
    constructor(token) {
        super();
        this.token = token;
    }

    connect() {
        var opts = this.getRequestOptions(),
            rtm = this;

        return request(opts)
            .then(function(data) {
                data = JSON.parse(data);

                rtm.emit('init', data);
                rtm.initSocket(data.url);

                return data;
            });
    }

    initSocket(socketUrl) {
        this.ws = new WebSocket(socketUrl);

        this.ws.on('open', () => this.emit('connect'));
        this.ws.on('error', (error) => this.emit('error', error));
        this.ws.on('message', (message) => this.emitMessage(message));
    }

    emitMessage(messageData) {
        var message = JSON.parse(messageData);

        this.emit(message.type, message);
    }

    getRequestOptions() {
        return {
            hostname: 'slack.com',
            port: '443',
            path: '/api/rtm.start?' + querystring.stringify({
                token: this.token,
                simple_latest: 1,
                no_unreads: 1
            }),
            method: 'GET'
        };
    }
}
