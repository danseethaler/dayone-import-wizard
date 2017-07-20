import React from 'react'; // eslint-disable-line no-unused-vars
// import PropTypes from 'prop-types';

import FileRow from './FileRow';
import FileImportedRow from './FileImportedRow';

const FilesTable = ({ files, onFileChange, removeFile }) => {
  const fileRows = [];
  for (let filePath in files) {
    if (files.hasOwnProperty(filePath)) {
      if (files[filePath].entryId) {
        fileRows.push(<FileImportedRow key={filePath} {...files[filePath]} />);
        continue;
      }
      fileRows.push(
        <FileRow
          key={filePath}
          onFileChange={changes => onFileChange({ filePath, changes })}
          removeFile={() => removeFile(filePath)}
          {...files[filePath]}
        />
      );
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 'calc(100% - 50px)',
        margin: 'auto'
      }}
    >
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
