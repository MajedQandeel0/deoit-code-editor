var fs = require('fs');
var files = [
  'index.html',
  'pages/editor.html',
  'learn.html',
  'search.html',
  'terms.html',
  'privacy.html',
  'learn-html.html',
  'learn-css.html',
  'learn-js.html',
  'blog/index.html',
  'blog/bootstrap-is-dead.html',
  'blog/learn-html-7-days.html'
];
files.forEach(function(f) {
  var c = fs.readFileSync('C:\\Users\\dell jo\\Desktop\\Deoit\\code-editor\\' + f, 'utf8');
  var t = c.match(/<title>(.*?)<\/title>/);
  var d = c.match(/name="description"\s+content="(.*?)"/);
  var titleLen = t ? t[1].length : 0;
  var descLen = d ? d[1].length : 0;
  var titleOk = (titleLen >= 50 && titleLen <= 60) ? 'OK' : 'FAIL';
  var descOk = (descLen >= 150 && descLen <= 160) ? 'OK' : 'FAIL';
  console.log(f.padEnd(30) + ' title=' + String(titleLen).padStart(2) + ' [' + titleOk + ']  desc=' + String(descLen).padStart(3) + ' [' + descOk + ']');
  if (t) console.log('  Title: ' + t[1]);
  if (d) console.log('  Desc:  ' + d[1]);
  console.log('');
});
