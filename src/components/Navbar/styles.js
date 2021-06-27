import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    padding: '0',

    color: 'inherit',
    background: 'none',
  },
  cartBar: {
    oxShadow: 'none',
    margin: '0 auto',
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  toolbar: {
    padding: '.5rem 0',
    borderTop: '3px solid rgba(223,209,178, .8)',
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      padding: '0 0',
      textAlign: 'center',
      justifyContent: 'center',
    },
  },
  link: {
    padding: '.5rem 1.5rem',
    paddingBottom: '1rem',
    textDecoration: 'none',
    borderBottom: '3px solid transparent',

    '&:hover': {
      textDecoration: 'none',
      borderBottom: '3px solid rgba(223,209,178, .8)',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      padding: '.5rem .8rem',
    },
  },
  active: {
    borderBottom: '3px solid rgba(223,209,178, .8)',
  },
  button: {
    borderRadius: '0',
    height: '100%',
    padding: '.8em 1.5em .5em',
    margin: '0',
    '&:hover': {
      background: 'rgba(223, 209, 178, 0.8)',
    },
    [theme.breakpoints.down('xs')]: {
      flex: 1,
    },
  },
  buttonText: {
    marginRight: '1em',
    fontSize: '1rem ',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  buttonIcon: {
    height: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      height: '1.2rem',
    },
  },
}));
