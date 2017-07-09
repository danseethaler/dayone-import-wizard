import pandoc from 'node-pandoc';
import path from 'path';
import cp from 'child_process';
import fs from 'fs';

const processors = {
    doc: 'toDocx',
    docx: 'pandoc',
    txt: 'pandoc',
    md: 'none'
};

export default function(filePath, cb) {
    let ext = path.extname(filePath) || '';
    ext = ext.substr(1);

    let safeFilePath = filePath.replace(/['[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    let processor = processors[ext];
    if (!processor) return cb(new Error(`Invalid file type - .${ext}`));

    switch (processor) {
        case 'pandoc':
            var args = ['-f', ext, '-t', 'markdown'];
            return pandoc(filePath, args, cb);

        case 'toDocx':
            cp.execSync(`textutil -convert docx ${safeFilePath}`, err => {
                if (err) console.error(err);
            });

            var args = ['--wrap=preserve', '-f', 'docx', '-t', 'markdown'];

            pandoc(`${filePath}x`, args, (err, md) => {
                cb(err, md);
                cp.exec(`rm -rf ${safeFilePath}x`, err => {
                    if (err) console.error(err);
                });
            });

            break;

        case 'none':
            return fs.readFile(filePath, 'utf-8', cb);
    }
}
