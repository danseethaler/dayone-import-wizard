import React from 'react';

import { Button } from '../components/Tags';

import { connect } from 'react-redux';
import { addFiles } from '../actions';

import { selectImportFiles } from '../utilities';

const AddButton = ({ addFiles }) => {
    return (
        <div>
            <Button
                success
                style={{ float: 'right' }}
                onClick={() => {
                    var files = selectImportFiles();
                    if (files) {
                        addFiles(files);
                    }
                }}
            >
                Select Files
            </Button>
        </div>
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
