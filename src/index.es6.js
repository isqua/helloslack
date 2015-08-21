import SlackBot from './slackbot.es6';
import SlackRtm from './rtm.es6';

export default class slackHello {
    constructor(opts) {
        var slack = this;

        this.rtm = new SlackRtm(opts.token);
        this.rtm.connect();
        this.rtm.on('init', function(data) {
            var domain = data.team.domain + '.slack.com';

            slack.bot = new SlackBot(domain, opts.bot_token);
        });
    }

    on() {
        return this.rtm.on(...arguments);
    }
}
