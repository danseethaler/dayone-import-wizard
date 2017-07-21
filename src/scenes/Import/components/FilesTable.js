import React from 'react'; // eslint-disable-line no-unused-vars
// import PropTypes from 'prop-types';
import createFileRow from './FileRow';

const FilesTable = ({ files, onFileChange, removeFile, importFile }) => {
  const fileRows = Object.keys(files).map(filePath => {
    return createFileRow({
      filePath,
      file: files[filePath],
      onFileChange: changes => onFileChange({ filePath, changes }),
      removeFile: () => removeFile(filePath),
      importFile: () => importFile(files[filePath])
    });
  });

  console.log('fileRows', fileRows);

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
