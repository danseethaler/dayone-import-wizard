import React from 'react'; // eslint-disable-line no-unused-vars
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

export default FilesTable;
