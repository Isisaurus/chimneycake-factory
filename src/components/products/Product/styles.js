import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    border: 'none',
    boxShadow: 'none',
    padding: 0,
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: '15rem',
  },

  cardActions: {
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    padding: '1em 1.8em',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  description: {
    padding: '.3rem 0',
  },
}));
