import { connect } from 'react-redux';
import { updateFile } from '../actions';

import FilesTable from '../components/FilesTable';

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        onFileChange: ({ path, change }) => {
            dispatch(updateFile({ path, change }));
        }
    };
};

const ImportTable = connect(mapStateToProps, mapDispatchToProps)(FilesTable);

export default ImportTable;
