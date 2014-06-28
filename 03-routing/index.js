
var koa = require('koa');

var app = module.exports = koa();

app.use(function* (next) {
  if(this.method !== 'GET' || this.path !== '/') {
    return yield next;
  }

  this.response.body = 'hello world';
});

app.use(function* (next) {
  if(this.method !== 'GET' || this.path !== '/404') {
    return yield next;
  }

  this.response.body = 'page not found';
});

app.use(function* (next) {
  if(this.method !== 'GET' || this.path !== '/500') {
    return yield next;
  }

  this.response.body = 'internal server error';
});
