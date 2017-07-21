import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { TextInput, Button } from '../../../components';
import StatusIcon from './StatusIcon';
import FileRowContainer from './FileRowContainer';

const File = ({
  filePath,
  title,
  dayone: { d },
  onFileChange,
  removeFile,
  importFile,
  status,
  markdown
}) => {
  return (
    <FileRowContainer status={status}>
      <div style={{ display: 'inline-block' }}>
        <TextInput
          type="text"
          value={title}
          onChange={({ target: { value } }) => {
            onFileChange({ title: value });
          }}
        />
      </div>
      <p style={{ fontWeight: 300, fontFamily: 'Lato' }}>
        {markdown.substr(0, 100).replace(/\n/g, ' ').trim() + '...'}
      </p>
      <div style={{ display: 'inline-block' }}>
        <input
          type="datetime-local"
          style={{
            fontFamily: 'Lato',
            fontSize: '1em',
            fontWeight: '300',
            border: 'none',
            textAlign: 'center'
          }}
          value={d}
          onChange={({ target: { value } }) => {
            console.log('value', value);
            onFileChange({ dayone: { d: value } });
          }}
        />
      </div>
      <div style={{ display: 'inline-block' }}>
        <StatusIcon status={status} />
      </div>
      <div style={{ display: 'inline-block' }}>
        <Button
          small
          gray
          onClick={() => {
            removeFile(filePath);
          }}
        >
          Remove
        </Button>
        <Button
          small
          success
          onClick={() => {
            importFile(filePath);
          }}
        >
          Import
        </Button>
      </div>
    </FileRowContainer>
  );
};

File.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
  // date: PropTypes.object.isRequired
  // active: PropTypes.bool.isRequired,
  // text: PropTypes.string.isRequired
};

export default File;
