import React from 'react';

import { TitleBar, H1, Subtitle } from '../../components';

import ImportContainer from './containers/ImportContainer';
import ImportActions from './containers/ImportActions';
import { connect } from 'react-redux';

class ImportScene extends React.Component {
    render = () => {
        let setFiles = !!Object.keys(this.props.files).length;
        return (
            <div>
                <TitleBar />
                <H1 style={{ marginTop: 45 }}>
                    Select files to import into DayOne
                </H1>
                <Subtitle>PDF, DOCX, DOC, PAGES, TXT, MD</Subtitle>
                {setFiles ? <ImportContainer /> : null}
                <ImportActions setFiles={setFiles} />
            </div>
        );
    };
}

export default connect(state => state)(ImportScene);
