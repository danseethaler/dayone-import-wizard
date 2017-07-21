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
    '@media(max-width: 600px)': {
      width: 'calc(100% - 44px)'
    },
    '@media(max-width: 1000px) and (min-width: 600px)': {
      width: 'calc(50% - 44px)'
    },
    '@media(max-width: 1200px) and (min-width: 1000px)': {
      width: 'calc(33% - 44px)'
    },
    '@media(max-width: 1400px) and (min-width: 1200px)': {
      width: 'calc(25% - 44px)'
    },
    '@media(min-width: 1400px)': {
      width: 'calc(20% - 44px)'
    }
  },
  ({ status }) => {
    switch (status) {
    case 'initializing':
      return { border: '2px solid ' + color.primary };
    case 'ready':
      return { border: '2px solid ' + color.success };
    case 'success':
      return { opacity: 0.5, backgroundColor: color.success };
    case 'error':
      return { opacity: 0.5, border: '2px solid ' + color.danger };
    default:
    }
  }
);
