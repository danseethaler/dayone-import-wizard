console.clear();

('use strict');

import React from 'react';
import ReactDOM from 'react-dom';
import base, { TitleBar, Button, Table, H1, Subtitle } from './components';
import { selectImportFiles } from './utilities';

ReactDOM.render(
    <div>
        <TitleBar />
        <H1>Import Your Files</H1>
        <Subtitle>Save your memories</Subtitle>
        <div>
            <Button type="success" onClick={selectImportFiles}>
                Import Files
            </Button>
        </div>
    </div>,
    document.getElementById('react_start')
);
