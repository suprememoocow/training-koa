
var koa = require('koa');

var app = module.exports = koa();

app.use(function* errorHandler(next) {
  try {
    yield next;
  } catch (err) {
    app.emit('error', err);
    this.response.status = 500;
    // your error handling logic goes here
    this.response.body = 'internal server error';
  }
});

app.use(function* () {
  throw new Error('boom!');
});
