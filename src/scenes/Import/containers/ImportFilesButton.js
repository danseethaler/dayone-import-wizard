import React from 'react'; // eslint-disable-line no-unused-vars

import { Button } from '../../../components';

import { connect } from 'react-redux';
import { importReadyFiles } from '../../../actions';

const AddButton = ({ importReadyFiles, count, readyFiles }) => {
  return (
    <Button
      primary
      onClick={() => {
        console.log('readyFiles', readyFiles);
        if (readyFiles) importReadyFiles(readyFiles);
      }}
    >
      Import {count} Files
    </Button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    importReadyFiles: files => {
      dispatch(importReadyFiles(files));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddButton);
