console.clear();

('use strict');

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Table } from './components';

ReactDOM.render(
    <div>
        <div
            style={{
                width: '100%',
                marginTop: 22,
                borderBottom: '1px solid #dcdcdc'
            }}
        />
        <div>
            <Button
                type="success"
                onClick={() => {
                    console.log('success');
                }}
            >
                Welcome
            </Button>
        </div>
    </div>,
    document.getElementById('react_start')
);
