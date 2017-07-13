import React from 'react';
import PropTypes from 'prop-types';

import { Table, Th } from '../../../components';
import FileRow from './FileRow';
import FileImportedRow from './FileImportedRow';

const FilesTable = ({ files, onFileChange, removeFile }) => {
    const fileRows = [];
    for (let filePath in files) {
        if (files.hasOwnProperty(filePath)) {
            if (files[filePath].entryId) {
                fileRows.push(
                    <FileImportedRow key={filePath} {...files[filePath]} />
                );
                continue;
            }
            fileRows.push(
                <FileRow
                    key={filePath}
                    onFileChange={change => onFileChange({ filePath, change })}
                    removeFile={change => removeFile(filePath)}
                    {...files[filePath]}
                />
            );
        }
    }

    return (
        <div>
            {fileRows}
        </div>
    );
};

// FilesTable.propTypes = {
//     files: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             completed: PropTypes.bool.isRequired,
//             text: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
//     onTodoClick: PropTypes.func.isRequired
// };

export default FilesTable;
