import React from 'react';
import StatusIcon from './StatusIcon';
import { A } from '../../../components';

const File = ({ title, date, status, entryId }) => {
    return (
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
    );
};

// File.propTypes = {
//     title: PropTypes.string.isRequired
//     // date: PropTypes.object.isRequired
//     // active: PropTypes.bool.isRequired,
//     // text: PropTypes.string.isRequired
// };

export default File;
