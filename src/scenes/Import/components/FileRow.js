import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { TextInput, Button } from '../../../components';
import StatusIcon from './StatusIcon';

const File = ({
  filePath,
  title,
  dayone: { d },
  onFileChange,
  removeFile,
  status,
  markdown
}) => {
  return (
    <div
      style={{
        maxWidth: 'calc(33% - 10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
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
        {markdown.substr(0, 100).replace(/\n/g, ' ') + '...'}
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
      </div>
    </div>
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
