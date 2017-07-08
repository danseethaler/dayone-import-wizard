export function addFiles(files) {
    return { type: 'ADD_FILES', files };
}
export function updateFile({ path, change }) {
    return {
        type: 'UPDATE_FILE',
        path,
        change
    };
}
