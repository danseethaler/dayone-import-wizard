('use strict');

import React from 'react'; // eslint-disable-line no-unused-vars
import glamorous from 'glamorous';
import Button from './Button';

export { Button };

export const TitleBar = glamorous.div({
  WebkitAppRegion: 'drag',
  width: '100%',
  height: 22,
  borderBottom: '1px solid #dcdcdc'
});

export const A = glamorous.a({
  textDecoration: 'none',
  color: '#29a88e',
  fontFamily: 'Lato',
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: 0.7
  }
});

export const H1 = glamorous.h1({
  fontFamily: 'Lato-Light',
  fontWeight: 300,
  lineHeight: '20px',
  color: '#333',
  textAlign: 'center'
});

export const H3 = glamorous.h3({
  fontFamily: 'Lato-Light',
  fontWeight: 300,
  lineHeight: '20px',
  color: '#333',
  textAlign: 'center'
});

export const Subtitle = glamorous.p({
  fontFamily: 'Lato',
  color: '#333',
  textAlign: 'center'
});

export const P = glamorous.p({
  fontFamily: 'Lato',
  color: '#3a3a3a',
  fontSize: 16,
  lineHeight: '26px'
});

export const Th = glamorous.th({
  fontFamily: 'Lato',
  color: '#3a3a3a',
  fontSize: '1.1em',
  lineHeight: '26px'
});

export const TextInput = glamorous.input({
  display: 'block',
  margin: 0,
  width: 'calc(100% - 10px)',
  fontFamily: 'sans-serif',
  fontSize: 16,
  borderRadius: 2,
  // border: 'solid 1px #dcdcdc',
  // transition: 'box-shadow 0.3s, border 0.3s'
  padding: 10,
  ':focus': {
    outline: 'none',
    borderBottom: 'solid 2px #969696'
  },
  border: 'none',
  borderBottom: 'solid 2px #c9c9c9',
  transition: 'border 0.3s'
});

export const Table = glamorous.table({
  width: 'calc(100% - 100px)',
  maxWidth: 1000,
  margin: 'auto',
  textAlign: 'left'
});
