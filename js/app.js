import React from 'react';

import { TitleBar, H1, Subtitle } from './components/Tags';

import AddFilesButton from './containers/AddFilesButton';
import ImportTable from './containers/ImportTable';

const App = () =>
    <div>
        <TitleBar />
        <H1>Import Your Files</H1>
        <Subtitle>Save your memories</Subtitle>
        <ImportTable />
        <AddFilesButton />
    </div>;

export default App;
