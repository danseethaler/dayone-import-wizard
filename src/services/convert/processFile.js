import pandoc from 'node-pandoc';
import path from 'path';
import cp from 'child_process';
import fs from 'fs';

const processors = {
  doc: toDocx,
  docx: pandocProcessor,
  rtf: txt,
  txt,
  htm: pandocProcessor,
  html: pandocProcessor,
  pdf,
  md: defaultProcesor,
  pages
};

function txt({ filePath }, cb) {
  return fs.readFile(filePath, 'ascii', cb);
}

function pdf({ filePath }, cb) {
  const appPath = `${process.env.PWD}/src/resources/extract_pdf_text.app`;
  var command = `automator -i ${filePath} ${appPath}`;

  cp.exec(command, (err, tempFilePath) => {
    if (err) throw err;

    // Extract the file path from the response
    tempFilePath = tempFilePath.split('"')[1];

    fs.readFile(tempFilePath, (err, res) => {
      res = res.toString();
      if (!res) return cb(new Error('Unable to extract PDF text.'));
      cb(err, res);

      // Delete temporary file
      tempFilePath = tempFilePath.replace(/['[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

      cp.exec(`rm -rf ${tempFilePath}`, err => {
        if (err) throw err;
      });
    });
  });
}

function pages({ safeFilePath }, cb) {
  const appPath = `${process.env.PWD}/src/resources/pages_to_docx.app`;
  var command = `automator -i ${safeFilePath} ${appPath}`;

  cp.exec(command, (err, tempFilePath) => {
    if (err) return cb(err);

    // Extract the file path from the response
    tempFilePath = tempFilePath.split('"')[1];

    var args = ['--wrap=preserve', '-f', 'docx', '-t', 'markdown'];

    pandoc(`${tempFilePath}`, args, (err, md) => {
      cb(err, md);

      // Delete temporary file
      tempFilePath = tempFilePath.replace(/['[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      cp.exec(`rm -rf ${tempFilePath}`, err => {
        if (err) console.error(err);
      });
    });
  });
}

function toDocx({ filePath, safeFilePath }, cb) {
  cp.exec(`textutil -convert docx ${safeFilePath}`, err => {
    if (err) console.error(err);

    var args = ['--wrap=preserve', '-f', 'docx', '-t', 'markdown'];

    pandoc(`${filePath}x`, args, (err, md) => {
      cb(err, md);
      cp.exec(`rm -rf ${safeFilePath}x`, err => {
        if (err) console.error(err);
      });
    });
  });
}

function pandocProcessor({ filePath, ext }, cb) {
  var args = ['--wrap=preserve', '-f', ext, '-t', 'markdown'];
  return pandoc(filePath, args, cb);
}

function defaultProcesor({ filePath }, cb) {
  return fs.readFile(filePath, 'utf-8', cb);
}

export default function(filePath, cb) {
  let ext = path.extname(filePath) || '';
  ext = ext.substr(1);

  let safeFilePath = filePath.replace(/['[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  let processor = processors[ext];
  if (!processors[ext]) return cb(new Error(`Invalid file type - .${ext}`));

  // Invoke the processor function
  processor({ ext, filePath, safeFilePath }, cb);
}
