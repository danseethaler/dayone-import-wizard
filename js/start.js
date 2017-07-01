console.clear();

('use strict');

import React from 'react';
import ReactDOM from 'react-dom';
import { TitleBar, Button, Table } from './components';

ReactDOM.render(
    <div>
        <TitleBar />
        <div>
            <Button
                type="success"
                onClick={() => {
                    console.log('success');
                }}
            >
                Get Started
            </Button>
        </div>
    </div>,
    document.getElementById('react_start')
);
