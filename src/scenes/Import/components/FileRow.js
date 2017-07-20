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
    <div style={{ maxWidth: 'calc(100% - 30px)' }}>
      <div
        style={{
          minWidth: 600,
          display: 'flex',
          alignItems: 'space-between',
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
        <div style={{ display: 'inline-block' }}>
          <input
            type="datetime-local"
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
      <div>
        <pre style={{ fontWeight: 300, fontFamily: 'Lato' }}>
          {markdown}
        </pre>
        {true || markdown.substr(0, 100) + '...'}
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
