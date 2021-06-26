import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  total: {
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      marginBottom: '1rem',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'flex-end',
  },
  checkoutButton: {
    marginLeft: '1em',
  },
  grid: {
    marginTop: '2.5rem',
    background: 'rgba(19,24,31, .1)',
  },
  emptyMessage: {
    marginTop: '2.5rem',
    minHeight: '50vh',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));
