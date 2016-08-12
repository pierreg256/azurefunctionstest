module.exports = function (context, data) {
    context.log('Webhook was triggered!');

    context.res = {
        body: { greeting: 'Hello ' + data.first + ' ' + data.last + '!'}
    };

    context.done();
}