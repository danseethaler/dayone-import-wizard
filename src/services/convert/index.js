import fs from 'fs';
import { updateFile } from '../../actions';
import processFile from './processFile';

var store = {
  files: [],
  processing: false
};

export default (files, dispatch) => {
  store.files = store.files.concat(files);

  function processNext() {
    if (store.processing) return;
    if (!store.files.length) return;

    store.processing = store.files.shift();

    processFile(store.processing, (err, md) => {
      if (typeof md === 'boolean') return;
      if (err) {
        console.error(err);
        dispatch(
          updateFile({
            filePath: store.processing,
            changes: {
              status: 'error',
              errorMessage: err.message
            }
          })
        );
        store.processing = false;
        return processNext();
      }

      fs.stat(store.processing, (err, stat) => {
        console.log('stat', stat);
        dispatch(
          updateFile({
            filePath: store.processing,
            changes: {
              markdown: md,
              status: 'ready',
              date: stat.mtime
            }
          })
        );
        store.processing = false;
        return processNext();
      });
    });
  }

  processNext();
};
