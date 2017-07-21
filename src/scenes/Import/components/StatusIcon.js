('use strict');

import React from 'react'; // eslint-disable-line no-unused-vars
import { FaClose, FaRefresh, FaCheck } from 'react-icons/lib/fa';
import Rotate from '../../../components/Rotate';
import { color } from '../../../components/styles';

const iconMaps = {
  error: {
    Icon: FaClose,
    color: '#dd4444',
    rotate: false,
    text: 'Error'
  },
  initializing: {
    Icon: FaRefresh,
    color: color.primary,
    rotate: true,
    text: 'Initializing'
  },
  ready: {
    Icon: FaCheck,
    color: '#bbb',
    rotate: false,
    text: 'Ready to Import'
  },
  importing: {
    Icon: FaRefresh,
    color: '#050',
    rotate: true,
    text: 'Importing'
  },
  success: {
    Icon: FaCheck,
    color: '#29a88e',
    rotate: false,
    text: 'Success'
  }
};

export default class extends React.Component {
  render() {
    const { size } = this.props;
    const { Icon, color, rotate } = iconMaps[this.props.status] || {};
    if (!Icon) return null;
    if (rotate) {
      return (
        <Rotate>
          <Icon size={size || 15} color={color} />
        </Rotate>
      );
    }
    return <Icon size={size || 15} color={color} />;
  }
}
