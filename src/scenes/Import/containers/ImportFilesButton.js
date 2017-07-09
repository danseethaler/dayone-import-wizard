import React from 'react';

import { Button } from '../../../components';

import { connect } from 'react-redux';
import { addFiles } from '../../../actions';
import { getReadyFiles } from '../../../selectors';
import { selectImportFiles } from '../services';

const AddButton = ({ addFiles, readyFilesCount }) => {
    return (
        <Button
            primary
            onClick={() => {
                var files = selectImportFiles();
                if (files) addFiles(files);
            }}
        >
            Import {readyFilesCount} Files
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

export default connect(state => {
    return {
        readyFilesCount: Object.keys(getReadyFiles(state)).length
    };
}, mapDispatchToProps)(AddButton);
