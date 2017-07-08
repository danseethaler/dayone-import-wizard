import React from 'react';
import PropTypes from 'prop-types';

import { Table } from './Tags';
import FileRow from './FileRow';

const FilesTable = ({ files, onFileChange }) => {
    const fileRows = [];
    for (let path in files) {
        if (files.hasOwnProperty(path)) {
            fileRows.push(
                <FileRow
                    key={path}
                    onFileChange={change => onFileChange({ path, change })}
                    {...files[path]}
                />
            );
        }
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Entry Title</th>
                    <th>Date</th>
                    <th>Tags</th>
                </tr>
            </thead>
            <tbody>
                {fileRows}
            </tbody>
        </Table>
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
