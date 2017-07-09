import { createSelector } from 'reselect';
const getFiles = state => state.files;

export const getReadyFiles = createSelector([getFiles], files => {
    var readyFiles = {};
    for (var filePath in files) {
        if (files.hasOwnProperty(filePath)) {
            var fileOb = files[filePath];
            if (fileOb.status !== 'ready') continue;
            readyFiles[filePath] = fileOb;
        }
    }
    return readyFiles;
});
