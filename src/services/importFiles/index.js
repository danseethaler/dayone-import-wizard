import getMeta from './getMeta';
import path from 'path';
import low from 'lowdb';
const db = low('db.json');

// Clear database
// db.setState({});
db.defaults({ importedFiles: {} }).write();
// console.log(db.get('importedFiles').value());

import { updateFile } from '../../actions';
import createCommand from './createCommand';
import cp from 'child_process';

export default function(files, dispatch) {
  // console.log(JSON.stringify(files, null, 4));
  var filePaths = Object.keys(files);

  function importFile() {
    if (!filePaths.length) return;

    let filePath = filePaths.shift();
    var fileOb = files[filePath];

    function cb(dispatch, entryId) {
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
  var command = createCommand(config.dayone || {});

  // console.log('command', command);
  var process = cp.exec(command, (error, stdout) => {
    if (error) return console.error(error);

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
      .set(config.filePath.replace(/[\s./\\]/g, '_'), meta)
      .write();

    cb(entryId);

    // Rename the imported file with the DayOne entryId for reference
    if (config.filePath.indexOf('DayOne_') < 0) {
      var ext = path.extname(config.filePath);
      var basename = path.basename(config.filePath, ext);
      var directory = path.dirname(config.filePath);

      var newFile = directory + '/' + basename + ' DayOne_' + entryId + ext;
      newFile = newFile.replace(/['[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      var currentFile = config.filePath.replace(
        /['[\]{}()*+?.,\\^$|#\s]/g,
        '\\$&'
      );

      cp.exec(`mv ${currentFile} ${newFile}`, err => {
        if (err) console.error(err);
      });
    }
  });

  var markdown = config.markdown;
  // Check if the user has opted into having the filename added to the text
  markdown = `${config.title}\n\n${markdown}`;

  process.stdin.write(markdown);
  process.stdin.end();
}
