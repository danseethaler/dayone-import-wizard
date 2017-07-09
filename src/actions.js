import convert from './services/convert';

export function addFiles(files) {
    return dispatch => {
        dispatch({ type: 'ADD_FILES', files });
        convert(files, dispatch);
    };
}

export function updateFile({ filePath, changes }) {
    return {
        type: 'UPDATE_FILE',
        filePath,
        changes
    };
}
