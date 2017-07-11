import path from 'path';

// "/Users/danseethaler/Dropbox/Parent Computer Uploads/Info for Daniel's mission.doc": {
//     filePath:
//         "/Users/danseethaler/Dropbox/Parent Computer Uploads/Info for Daniel's mission.doc",
//     active: true,
//     title: "Info for Daniel's mission",
//     status: 'initializing',
//     markdown: '',
//     date: '2017-01-04T04:00:00.000Z'
// },
// '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith.docx': {
//     filePath:
//         '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith.docx',
//     active: true,
//     title: 'Faith',
//     status: 'initializing',
//     markdown: '',
//     date: '2017-04-04T04:00:00.000Z'
// },
// '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith in Jesus Christ.docx': {
//     filePath:
//         '/Users/danseethaler/Dropbox/Parent Computer Uploads/Faith in Jesus Christ.docx',
//     active: true,
//     title: 'Faith in Jesus Christ',
//     status: 'initializing',
//     markdown: '',
//     date: '2017-08-04T04:10:00.000Z'
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

        case 'REMOVE_FILES':
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
