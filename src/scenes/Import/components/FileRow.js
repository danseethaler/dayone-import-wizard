import React from 'react'; // eslint-disable-line no-unused-vars
import FileRowContainer from './FileRowContainer';
import StatusIcon from './StatusIcon';
import { TextInput, Button } from '../../../components';
import { A } from '../../../components';

export default props => {
  const { file: { filePath, status } } = props;
  const Comp = Components[status];
  if (Comp) return <Comp key={filePath} {...props} />;
};

const Components = {};

Components.initializing = ({
  removeFile,
  importFile,
  file: { filePath, title, dayone: { d }, onFileChange, status, markdown }
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
        <StatusIcon status={status} size={50} />
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

Components.ready = ({
  removeFile,
  importFile,
  file: { filePath, title, dayone: { d }, onFileChange, status, markdown }
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

Components.success = ({ file: { title, date, status, entryId } }) => {
  return (
    <FileRowContainer>
      <div>
        <span>
          {title}
        </span>
        <span>
          {date}
        </span>
        <A
          href="#"
          onClick={() => {
            window.location = `dayone2://view?entryId=${entryId}`;
            return false;
          }}
        >
          View in DayOne
        </A>
        <StatusIcon status={status} />
      </div>
    </FileRowContainer>
  );
};
