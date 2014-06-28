
var koa = require('koa');

/**
 * This is a promisified version of zlib's gzip function,
 * allowing you to simply `yield` it without "thunkifying" it.
 *
 *   this.response.body = yield gzip('something');
 */
var gzip = require('mz/zlib').gzip;

var app = module.exports = koa();

app.use(function* () {
  var content = 'hello world';
  if(this.request.acceptsEncodings('gzip')) {
    this.set('Content-Encoding', 'gzip');
    this.response.body = yield gzip(content);
    return;
  }

  this.response.body = content;
})