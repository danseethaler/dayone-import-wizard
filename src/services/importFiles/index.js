import getMeta from './getMeta';

import low from 'lowdb';
const db = low('db.json');

// Clear database
// db.setState({});
db.defaults({ importedFiles: {} }).write();
console.log(db.get('importedFiles').value());

import { updateFile } from '../../actions';
import createCommand from './createCommand';
import cp from 'child_process';

export default function(files, dispatch) {
    console.log('typeof dispatch', typeof dispatch);
    // console.log(JSON.stringify(files, null, 4));
    var filePaths = Object.keys(files);

    function importFile() {
        if (!filePaths.length) return;

        let filePath = filePaths.shift();
        var fileOb = files[filePath];

        function cb(dispatch, entryId) {
            console.log('filePath', filePath);
            dispatch(
                updateFile({
                    filePath,
                    changes: {
                        status: 'success',
                        entryId
                    }
                })
            );
            importFile();
        }

        createEntry(fileOb, cb.bind(null, dispatch));
    }

    importFile();
}

function createEntry(config, cb) {
    console.log('config', config);
    var command = createCommand(config.dayone || {});

    console.log('command', command);
    var process = cp.exec(command, (error, stdout, stderr) => {
        if (error) return console.log('error', error);

        var entryId = stdout.split(' ').pop();

        var meta = Object.assign(
            {
                entryId,
                options: config.dayone,
                title: config.title,
                filePath: config.filePath,
                imported: new Date().getTime()
            },
            getMeta(config.markdown)
        );

        // Store the import for the history table
        db
            .get('importedFiles')
            .set(config.filePath.replace(/[\s\.\/\\]/g, '_'), meta)
            .write();

        cb(entryId);
    });

    process.stdin.write(config.markdown);
    process.stdin.end();
}
