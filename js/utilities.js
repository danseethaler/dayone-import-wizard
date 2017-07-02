// https://github.com/electron/electron/blob/master/docs/api/dialog.md
const { dialog } = require('electron').remote;

export { selectImportFiles };

const selectImportFiles = () => {
    const files = dialog.showOpenDialog({
        properties: ['openFile', 'openDirectory', 'multiSelections'],
        filters: [
            {
                name: 'Images',
                extensions: ['jpg', 'png', 'gif']
            },
            {
                name: 'Documents',
                extensions: ['doc', 'docx', 'pdf', 'txt']
            }
        ]
    });

    if (!files) return;
    console.log('files', files);
};
