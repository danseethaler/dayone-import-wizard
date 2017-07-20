import React from 'react'; // eslint-disable-line no-unused-vars
import AddFilesButton from './AddFilesButton';
import ImportFilesButton from './ImportFilesButton';

export default class ImportActions extends React.Component {
    render = () => {
        const { count, readyFiles } = this.props;
        return (
            <div
                style={{
                    margin: 'auto',
                    textAlign: 'center'
                }}
            >
                {count
                    ? <ImportFilesButton
                          count={count}
                          readyFiles={readyFiles}
                      />
                    : null}
                <AddFilesButton />
            </div>
        );
    };
}
