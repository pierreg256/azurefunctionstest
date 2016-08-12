var jwt = require('jsonwebtoken');

module.exports = function (context) {
    context.log('Webhook was triggered!');

    context.res = {
        body: { greeting: 'Hello World !'}
    };

    context.done();
}