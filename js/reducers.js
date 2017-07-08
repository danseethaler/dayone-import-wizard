import { combineReducers } from 'redux';
import path from 'path';

const initFilesState = {
    "/Users/danseethaler/Dropbox/Parent Computer Uploads/Info for Daniel's mission.doc": {
        path:
            "/Users/danseethaler/Dropbox/Parent Computer Uploads/Info for Daniel's mission.doc",
        active: true,
        title: "Info for Daniel's mission",
        initializing: true,
        date: '2017-01-04T04:00:00.000Z'
    },
    '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith.docx': {
        path: '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith.docx',
        active: true,
        title: 'Faith',
        initializing: true,
        date: '2017-04-04T04:00:00.000Z'
    },
    '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith in Jesus Christ.docx': {
        path:
            '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith in Jesus Christ.docx',
        active: true,
        title: 'Faith in Jesus Christ',
        initializing: true,
        date: '2017-08-04T04:10:00.000Z'
    }
};

function files(files = initFilesState, action) {
    const newState = Object.assign({}, files);
    const newFiles = action.files;

    switch (action.type) {
        case 'ADD_FILES':
            for (var i = 0; i < newFiles.length; i++) {
                newState[newFiles[i]] = {
                    path: newFiles[i],
                    active: true,
                    title: path.parse(newFiles[i]).name
                };
            }

            return newState;

        case 'UPDATE_FILE':
            newState[action.path][action.change.type] = action.change.value;

            return newState;

        case 'REMOVE_FILES':
            return newState;

        default:
            return newState;
    }
}

export default combineReducers({
    files
});
