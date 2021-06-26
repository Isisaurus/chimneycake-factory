import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  card: {
    border: 'none',
    boxShadow: 'none',
    background: 'white',
  },
  media: {
    height: '15rem',
  },
  name: {
    marginRight: '1em',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    marginTop: '.5rem',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    height: '100%',
  },
  removeButton: {
    height: '100%',
    marginLeft: 'auto',
    color: 'rgba(19,24,31, .)',
    borderRadius: '0',
  },
  icon: {
    height: '100%',
    borderRadius: '0',
    margin: '.5em',
  },
}));
