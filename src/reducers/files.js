import path from 'path';

// '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith.docx': {
//     filePath:
//         '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith.docx',
//     status: 'ready',
//     markdown:
//         'Faith in Jesus Christ\n\n1.  Joseph Smith taught in the Articles of Faith',
//     active: true,
//     title: 'Faith'
// }

const initFilesState = {};

export default function files(files = initFilesState, action) {
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
                    title: path.parse(newFiles[i]).name
                };
            }

            return newState;

        case 'UPDATE_FILE':
            Object.assign(newState[action.filePath], action.changes);

            return newState;

        case 'REMOVE_FILE':
            delete newState[action.filePath];
            return newState;

        case 'IMPORT_READY_FILES':
            for (var filePath in newState) {
                if (newState.hasOwnProperty(filePath)) {
                    var fileOb = newState[filePath];
                    if (fileOb.status === 'ready') fileOb.status = 'importing';
                }
            }
            return newState;

        default:
            return newState;
    }
}
