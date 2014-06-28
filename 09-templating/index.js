
var koa = require('koa');
var jade = require('jade');
var path = require('path');

var app = module.exports = koa();

function render(filename) {
  var self = this;
  return function(done) {
    jade.renderFile(filename, { }, done);
  };
}

app.use(function* () {
  var filename = path.join(__dirname, 'homepage.jade');

  var j = jade.compile(filename);

  this.response.body = yield render(filename);
});
