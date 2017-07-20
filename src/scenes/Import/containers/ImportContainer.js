import { connect } from 'react-redux';
import { updateFile, removeFile } from '../../../actions';

import FilesTable from '../components/FilesTable';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onFileChange: ({ filePath, change }) => {
      dispatch(updateFile({ filePath, change }));
    },
    removeFile: filePath => {
      dispatch(removeFile(filePath));
    }
  };
};

const ImportContainer = connect(mapStateToProps, mapDispatchToProps)(
  FilesTable
);

export default ImportContainer;
