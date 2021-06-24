import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  card: {
    height: '100%',
    border: 'none',
    boxShadow: 'none',
    padding: 0,
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em 1.5em',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    flex: 1,
    minHeight: '15rem',
    background: 'purple',
    opacity: 1,
  },
  title: {
    backgroundColor: '#dfd1b2',
    margin: 0,
    padding: '1em 1.5em',
    lineHeight: '1.5',
    flex: 1,
    width: '100%',
  },
  description: {
    padding: '.5em',
    color: '#444749',
  },
}));
