import path from 'path';
import { files as initialState } from './initialState';

export default function files(files = initialState, action) {
  // console.log('action', JSON.stringify(action, null, 4));
  const newState = Object.assign({}, files);
  const newFiles = action.files;

  switch (action.type) {
  case 'ADD_FILES':
    for (var i = 0; i < newFiles.length; i++) {
      newState[newFiles[i]] = {
        filePath: newFiles[i],
        status: 'initializing',
        markdown: '',
        active: true,
        title: path.parse(newFiles[i]).name,
        dayone: { d: '2000-01-01T12:00' } // Placeholder until file is evaluated
      };
    }

    return newState;

  case 'UPDATE_FILE':
    Object.assign(newState[action.filePath], action.changes);

    return newState;

  case 'REMOVE_FILE':
    delete newState[action.filePath];
    return newState;

  case 'IMPORT_FILE': {
    let fileOb = newState[action.filePath];
    if (fileOb.status === 'ready') fileOb.status = 'importing';
    return newState;
  }

  case 'IMPORT_READY_FILES': {
    for (var filePath in newState) {
      if (newState.hasOwnProperty(filePath)) {
        let fileOb = newState[filePath];
        if (fileOb.status === 'ready') fileOb.status = 'importing';
      }
    }
    return newState;
  }

  default:
    return newState;
  }
}
