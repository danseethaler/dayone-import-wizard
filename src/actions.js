import convert from './services/convert';
import importFiles from './services/importFiles';

export function addFiles(files) {
  return dispatch => {
    dispatch({ type: 'ADD_FILES', files });
    convert(files, dispatch);
  };
}

export function importFile(file) {
  return dispatch => {
    dispatch({ type: 'IMPORT_FILE', filePath: file.filePath });

    let importFilesOb = {};
    importFilesOb[file.filePath] = file;

    importFiles(importFilesOb, dispatch);
  };
}

export function importReadyFiles(files) {
  return dispatch => {
    dispatch({ type: 'IMPORT_READY_FILES' });
    importFiles(files, dispatch);
  };
}

export function updateFile({ filePath, changes }) {
  return {
    type: 'UPDATE_FILE',
    filePath,
    changes
  };
}

export function removeFile(filePath) {
  return {
    type: 'REMOVE_FILE',
    filePath
  };
}
