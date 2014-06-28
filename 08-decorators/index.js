
var koa = require('koa');
var escape = require('escape-html');

var app = module.exports = koa();

function htmlEscape(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

app.use(function* (next) {
  yield next;
  this.body = htmlEscape(this.body);
  // add some logic here!
})

app.use(function* body() {
  this.response.body = 'this following HTML should be escaped: <p>hi!</p>';
});
