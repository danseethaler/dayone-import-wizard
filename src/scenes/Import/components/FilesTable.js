import React from 'react';
import PropTypes from 'prop-types';

import { Table, Th } from '../../../components';
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
                    <Th>Entry Title</Th>
                    <Th>Date</Th>
                    <Th>Tags</Th>
                    <Th>&nbsp;</Th>
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
