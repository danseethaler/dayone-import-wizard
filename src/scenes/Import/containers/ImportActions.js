import React from 'react';
import AddFilesButton from './AddFilesButton';
import ImportFilesButton from './ImportFilesButton';

export default class ImportActions extends React.Component {
    render = () =>
        <div
            style={{
                margin: 'auto',
                textAlign: 'center'
            }}
        >
            {this.props.setFiles ? <ImportFilesButton /> : null}
            <AddFilesButton setFiles={this.props.setFiles} />
        </div>;
}
