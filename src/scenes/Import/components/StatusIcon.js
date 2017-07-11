('use strict');

import React from 'react';
import { FaClose, FaRefresh, FaCheck } from 'react-icons/lib/fa';

const iconMaps = {
    error: {
        Icon: FaClose,
        color: '#dd4444',
        text: 'Error'
    },
    initializing: {
        Icon: FaRefresh,
        color: '#bbb',
        text: 'Initializing'
    },
    ready: {
        Icon: FaCheck,
        color: '#bbb',
        text: 'Ready to Import'
    },
    importing: {
        Icon: FaRefresh,
        color: '#050',
        text: 'Importing'
    },
    success: {
        Icon: FaCheck,
        color: '#29a88e',
        text: 'Success'
    }
};

export default class extends React.Component {
    render() {
        const { Icon, color } = iconMaps[this.props.status] || {};
        if (!Icon) return null;
        return <Icon size={15} color={color} />;
    }
}
