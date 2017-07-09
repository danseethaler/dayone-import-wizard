import React from 'react';

import { Button } from '../../../components';

import { connect } from 'react-redux';
import { addFiles } from '../../../actions';

import { selectImportFiles } from '../services';

const AddButton = ({ addFiles, setFiles }) => {
    return (
        <Button
            success
            onClick={() => {
                var files = selectImportFiles();
                if (files) addFiles(files);
            }}
        >
            {setFiles ? 'Add More Files' : 'Select Files'}
        </Button>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addFiles: files => {
            dispatch(addFiles(files));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddButton);
