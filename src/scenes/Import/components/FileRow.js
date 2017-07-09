import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from '../../../components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import StatusIcon from './StatusIcon';

const File = ({ filePath, title, date, tags, onFileChange, status }) => {
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
                <span>
                    {tags || '-'}
                </span>
            </td>
            <td>
                <StatusIcon status={status} />
            </td>
        </tr>
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
