import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    backgroundColor: 'rgba(68,71,73, .1)',
    minHeight: '5rem',
    height: 'auto',
    marginTop: '5rem',
  },
  footerContainer: {
    padding: '1.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  grow: {
    flex: '1',
  },
  smContainer: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginTop: '1rem',
    },
  },
  icon: {
    fill: '#444749',
    height: '2rem',
    width: '2rem',
    '&:hover': {
      fill: '#13181F',
    },
  },
  link: {
    padding: '0 .3em',
    fontWeight: '700',
    textDecoration: 'none',
    '&:visited': {
      color: 'inherit',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
