import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from './Tags';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const File = ({ title, date, tags, onFileChange }) => {
    return (
        <tr>
            <td>
                <TextInput
                    type="text"
                    value={title}
                    onChange={({ target: { value } }) => {
                        onFileChange({ type: 'title', value });
                    }}
                />
            </td>
            <td>
                <DatePicker
                    selected={moment(date)}
                    onChange={value => {
                        onFileChange({ type: 'date', value });
                    }}
                />
            </td>
            <td>
                {tags}
            </td>
            <td>
                <Button small tabIndex={-1}>
                    Import
                </Button>
            </td>
        </tr>
    );
};

console.log('PropTypes', PropTypes);

File.propTypes = {
    onFileChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
    // date: PropTypes.object.isRequired
    // active: PropTypes.bool.isRequired,
    // text: PropTypes.string.isRequired
};

export default File;
