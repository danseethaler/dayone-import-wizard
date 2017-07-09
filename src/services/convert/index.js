import { updateFile } from '../../actions';
import processFile from './processFile';

var store = {
    files: [],
    processing: false
};

export default (files, dispatch) => {
    store.files = store.files.concat(files);
    processNext(dispatch);
};

function processNext(dispatch) {
    if (store.processing) return;
    if (!store.files.length) return;

    store.processing = store.files.shift();

    processFile(store.processing, (err, md) => {
        if (typeof md === 'boolean') return;
        if (err) {
            dispatch(
                updateFile({
                    filePath: store.processing,
                    changes: {
                        status: 'error'
                    }
                })
            );
            store.processing = false;
            return processNext(dispatch);
        }
        dispatch(
            updateFile({
                filePath: store.processing,
                changes: {
                    markdown: md,
                    status: 'ready'
                }
            })
        );
        store.processing = false;
        return processNext(dispatch);
    });
}
