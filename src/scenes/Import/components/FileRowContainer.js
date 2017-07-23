import glamorous from 'glamorous';
import { color } from '../../../components/styles';

export default glamorous.div(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 15,
    padding: 6,
    borderRadius: 5,
    opacity: 0.7,
    height: 230,
    '@media(max-width: 800px)': {
      width: 'calc(100% - 50px)'
    },
    '@media(max-width: 1200px) and (min-width: 800px)': {
      width: 'calc(50% - 50px)'
    },
    '@media(max-width: 1400px) and (min-width: 1200px)': {
      width: 'calc(33% - 50px)'
    },
    '@media(max-width: 1600px) and (min-width: 1400px)': {
      width: 'calc(25% - 50px)'
    },
    '@media(min-width: 1600px)': {
      width: 'calc(20% - 50px)'
    }
  },
  ({ status }) => {
    switch (status) {
    case 'initializing':
      return { border: '2px solid ' + color.primary };
    case 'ready':
      return { border: '2px solid ' + color.success };
    case 'importing':
      return { border: '2px solid ' + color.primary };
    case 'success':
      return { border: `2px solid ${color.success}` };
    case 'error':
      return { border: '2px solid ' + color.danger };
    default:
    }
  }
);
