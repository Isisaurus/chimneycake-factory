import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    marginTop: '2.5rem',
  },
  image: {
    width: '100%',
    maxWidth: '25rem',
  },
  media: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    marginTop: '5rem',
    marginBottom: '5rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
  title: {
    marginRight: '1.5rem',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
  },
  categories: {
    marginBottom: '1.5rem',
  },
  link: {
    marginRight: '.5em',
    textTransform: 'capitalize',
  },
  button: {
    alignSelf: 'flex-start',
  },
}));
