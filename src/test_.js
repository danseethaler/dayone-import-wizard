const cp = require('child_process');

console.log('__dirname', __dirname);
var command = `automator -i /Users/danseethaler/Dropbox/input_test.pdf  ${process
  .env.PWD}/src/resources/extract_pdf_text.app`;
console.log('command', command);
cp.exec(command, err => {
  if (err) throw err;
});
