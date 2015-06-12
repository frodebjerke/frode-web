var Remarkable = require('remarkable');
var text = require('../text/hello.md');
var md = new Remarkable();

console.log(md.render(text));
