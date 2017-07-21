import { connect } from 'react-redux';
import { updateFile, removeFile, importFile } from '../../../actions';

import FilesTable from '../components/FilesTable';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onFileChange: ({ filePath, changes }) => {
      dispatch(updateFile({ filePath, changes }));
    },
    removeFile: filePath => {
      dispatch(removeFile(filePath));
    },
    importFile: fileOb => {
      dispatch(importFile(fileOb));
    }
  };
};

const ImportContainer = connect(mapStateToProps, mapDispatchToProps)(
  FilesTable
);

export default ImportContainer;
