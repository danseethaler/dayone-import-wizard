import pandoc from 'node-pandoc';
import path from 'path';
import cp from 'child_process';
import fs from 'fs';

const processors = {
    doc: toDocx,
    docx: pandocProcessor,
    txt: pandocProcessor,
    htm: pandocProcessor,
    html: pandocProcessor,
    pdf: pdf,
    md: defaultProcesor
};

function pdf({ filePath, safeFilePath }, cb) {
    // TODO: Change the full path to relative
    var command = `automator -i ${filePath} /Users/danseethaler/Developer/electron/dayone-import-wizard/src/resources/extract_pdf_text.app`;
    console.log('command', command);
    cp.exec(command, err => {
        if (err) throw err;

        // Convert Mac encoding to UTF-8
        var desktop =
            process.env[process.platform == 'win32' ? 'USERPROFILE' : 'HOME'];

        // TODO: Use actual file basename instead of `input_text`
        var tempFilePath = path.join(desktop, 'Desktop', 'input_test.txt');

        fs.readFile(tempFilePath, (err, res) => {
            console.log('err, res', err, res.toString());
            cb(err, res.toString());

            // Delete temporary file
            tempFilePath = tempFilePath.replace(
                /['[\]{}()*+?.,\\^$|#\s]/g,
                '\\$&'
            );
            console.log('tempFilePath', tempFilePath);
            var command = 'rm -rf ' + tempFilePath;

            cp.exec(command, err => {
                if (err) throw err;
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

function pandocProcessor({ filePath, safeFilePath, ext }, cb) {
    var args = ['-f', ext, '-t', 'markdown'];
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
    processors[ext]({ ext, filePath, safeFilePath }, cb);
}
