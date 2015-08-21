# Hello, Slack

## Usage

```js
var HelloSlack = require('helloslack');

var slack = new HelloSlack({
    token: 'xxxx-0000000000-0000000000-0000000000-000000',
    bot_token: 'ABCDEFGHIJKLMNOPQRSTUVWX'
});

slack.on('team_join', function(data) {
    slack.bot.postMessage('@' + data.user.name, function() {
        return 'Hello, ' + data.user.name + '!';
    });
});
```
