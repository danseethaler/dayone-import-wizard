import React from 'react';

import { TitleBar, H1, Subtitle } from '../../components';

import ImportContainer from './containers/ImportContainer';
import ImportActions from './containers/ImportActions';
import { getReadyFiles } from '../../selectors';
import { connect } from 'react-redux';

class ImportScene extends React.Component {
    render = () => {
        const { readyFilesCount, readyFiles, filesCount } = this.props;
        return (
            <div>
                <TitleBar />
                <H1 style={{ marginTop: 45, lineHeight: '1.2em' }}>
                    Select files to import into DayOne
                </H1>
                <Subtitle>PDF, DOCX, DOC, PAGES, TXT, MD</Subtitle>
                {filesCount ? <ImportContainer /> : null}
                <ImportActions
                    readyFiles={readyFiles}
                    filesCount={filesCount}
                    count={readyFilesCount}
                />
            </div>
        );
    };
}

export default connect(state => {
    return {
        filesCount: Object.keys(state.files).length,
        readyFiles: getReadyFiles(state),
        readyFilesCount: Object.keys(getReadyFiles(state)).length
    };
})(ImportScene);
