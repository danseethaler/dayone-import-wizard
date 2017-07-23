import React from 'react'; // eslint-disable-line no-unused-vars
import FileRowContainer from './FileRowContainer';
import StatusIcon from './StatusIcon';
import { TextInput, Button } from '../../../components';
import { A } from '../../../components';
import ReactMarkdown from 'react-markdown';

export default props => {
  const { file: { filePath, status } } = props;
  const Comp = Components[status];
  if (Comp) return <Comp key={filePath} {...props} />;
};

const Components = {};

const FileTitle = ({ title }) =>
  <p
    style={{
      fontFamily: 'Lato',
      fontWeight: 400,
      lineHeight: '20px',
      color: '#333',
      textAlign: 'center'
    }}
  >
    {title}
  </p>;

Components.initializing = ({ file: { title, status } }) => {
  return (
    <FileRowContainer status={status}>
      <FileTitle title={title} />
      <StatusIcon status={status} size={50} />
      <FileTitle title="Preparing..." />
    </FileRowContainer>
  );
};

Components.error = ({ file: { title, status, errorMessage } }) => {
  return (
    <FileRowContainer status={status}>
      <FileTitle title={title} />
      <StatusIcon status={status} size={50} />
      <FileTitle title={`Unable to read file: ${errorMessage}`} />
    </FileRowContainer>
  );
};

Components.ready = ({
  removeFile,
  importFile,
  onFileChange,
  file: { filePath, title, dayone: { d }, status, markdown }
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
      <div
        style={{
          fontWeight: 300,
          fontFamily: 'Lato',
          overflow: 'scroll',
          width: 'calc(100% - 30px)',
          margin: 'auto',
          lineHeight: 1.4
          //   border: '1px solid gray',
          //   borderRadius: 3
        }}
      >
        <ReactMarkdown
          source={markdown.substr(0, 100000).replace(/\n/g, ' ').trim() + '...'}
        />
      </div>
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

Components.importing = ({ file: { title, status } }) => {
  return (
    <FileRowContainer status={status}>
      <FileTitle title={title} />
      <StatusIcon status={status} size={50} />
      <FileTitle title="Importing to DayOne..." />
    </FileRowContainer>
  );
};

Components.success = ({ file: { title, status, entryId } }) => {
  return (
    <FileRowContainer status={status}>
      <FileTitle title={title} />
      <StatusIcon status={status} size={50} />
      <p>
        <A
          href="#"
          onClick={() => {
            window.location = `dayone2://view?entryId=${entryId}`;
            return false;
          }}
        >
          View in DayOne
        </A>
      </p>
    </FileRowContainer>
  );
};
