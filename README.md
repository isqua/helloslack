# Hello, Slack

[![NPM version][npm-image]][npm-link]
[![Dependency status][deps-image]][deps-link]
[![devDependency status][devdeps-image]][devdeps-link]

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

[npm-image]: https://img.shields.io/npm/v/helloslack.svg?style=flat-square
[npm-link]: https://npmjs.org/package/helloslack
[deps-image]: https://img.shields.io/david/isqua/helloslack.svg?style=flat-square
[deps-link]: https://david-dm.org/isqua/helloslack
[devdeps-image]: https://img.shields.io/david/dev/isqua/helloslack.svg?style=flat-square
[devdeps-link]: https://david-dm.org/isqua/helloslack#info=devDependencies
