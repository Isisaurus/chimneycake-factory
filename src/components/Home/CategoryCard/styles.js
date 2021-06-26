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
    textDecoration: 'none',
    color: 'inherit',
  },
  media: {
    width: '100%',
    minHeight: '15rem',
    // backgroundColor: 'green',
    margin: 0,
    padding: 0,
    // opacity: 0.2,
  },
  title: {
    backgroundColor: '#dfd1b2',
    padding: '1em 1.5em',
    lineHeight: '1.5',
    width: '100%',
  },
  description: {
    paddingTop: '1rem',
    fontWeight: '300',
  },
}));
