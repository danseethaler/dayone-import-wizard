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
    var command = createCommand(config);

    console.log('command', command);
    var process = cp.exec(command, (error, stdout, stderr) => {
        console.log('config', config);

        if (error) {
            console.log('error', error);
            return;
        }
        console.log('stdout', stdout);

        var entryId = stdout.split(' ').pop();

        console.log('entryId:', entryId);

        console.log('Completed ' + config.filePath);
        cb(entryId);
    });

    process.stdin.write(config.markdown);
    process.stdin.end();
}
