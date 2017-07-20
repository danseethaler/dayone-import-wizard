('use strict');

import glamorous from 'glamorous';
import { bind } from 'styled-props';
import { color } from './styles';

const size = {
  small: '3px 10px',
  medium: '10px 20px',
  big: '20px 40px'
};

const textSize = {
  small: '.8em',
  medium: '1em',
  big: '1em'
};

const styles = bind({ color, size, textSize });

const Button = glamorous.button(
  {
    margin: 10,
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    borderRadius: 4,
    color: '#fff',
    boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
    ':hover': {
      opacity: 0.7,
      transform: 'translateY(-1px)',
      boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)'
    },
    ':focus': { outline: 0 },
    ':active': {
      transform: 'translateY(1px)'
    }
  },
  props => ({
    backgroundColor: styles.color(props),
    padding: styles.size(props),
    fontSize: styles.textSize(props)
  })
);

Button.defaultProps = {
  size: 'medium',
  color: 'gray',
  textSize: 'medium'
};

export default Button;
