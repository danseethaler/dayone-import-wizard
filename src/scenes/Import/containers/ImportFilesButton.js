import React from 'react';

import { Button } from '../../../components';

import { connect } from 'react-redux';
import { importReadyFiles } from '../../../actions';
import { getReadyFiles } from '../../../selectors';

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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        importReadyFiles: files => {
            dispatch(importReadyFiles(files));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddButton);
