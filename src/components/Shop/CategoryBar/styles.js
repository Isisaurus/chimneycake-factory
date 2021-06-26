import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbarSecondary: {
    padding: '0',
    overflowX: 'auto',
    height: 'auto',
  },
  toolbarLink: {
    textDecoration: 'none',
    display: 'block',
    padding: '1em 1.5em',
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
    '&:hover': {
      textDecoration: 'none',
      background: 'rgba(223, 209, 178, .4)',
    },
  },
  active: {
    textDecoration: 'underline',
  },
}));
