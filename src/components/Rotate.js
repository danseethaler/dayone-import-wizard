import glamorous from 'glamorous';
import { css } from 'glamor';

const spin = css.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(359deg)' }
});

export default glamorous.div({
  animation: `${spin} 2s infinite linear`
});
