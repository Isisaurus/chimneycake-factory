import { makeStyles } from '@material-ui/core';
import recipeImg from './../../assets/recipeimg.jpg';

export default makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    padding: '1.5em 0',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.light,
    '&>p': {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: '300',
      textTransform: 'uppercase',
      letterSpacing: '.1em',
    },
  },
  header: {
    marginTop: '1.5rem',
  },
  list: {
    padding: '.5rem 2rem',
    listStylePosition: 'inside',
    listStyle: 'square',
    color: theme.palette.secondary.light,
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight,
  },
  steps: {
    padding: '.5rem 2rem',
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight,
  },
  link: {
    color: theme.palette.secondary.light,
  },
  img: {
    width: '100%',
    background: `no-repeat url('${recipeImg}') center`,
    height: '40vh',
    maxHeight: '30rem',
    minHeight: '8rem',
    marginTop: '2.5rem',
  },
}));
