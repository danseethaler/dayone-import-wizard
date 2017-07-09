import React from 'react';

import { Button } from '../../../components';

import { connect } from 'react-redux';
import { addFiles } from '../../../actions';

import { selectImportFiles } from '../services';

const AddButton = ({ addFiles }) => {
    return (
        <Button
            primary
            onClick={() => {
                var files = selectImportFiles();
                if (files) addFiles(files);
            }}
        >
            Import Files
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
