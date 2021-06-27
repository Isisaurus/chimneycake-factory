import { makeStyles } from '@material-ui/core/styles';
import img from './../../assets/textimg.jpg';

export default makeStyles((theme) => ({
  parent: {
    columnCount: '2',
    columnFill: 'auto',
    columnGap: '2.5rem',

    [theme.breakpoints.down('sm')]: {
      columnCount: '1',
    },
    '&:first-child': {
      marginTop: '0',
    },
  },
  header: {
    marginTop: '2em',
    marginBottom: '1em',
    marginLeft: '1.5em',
    color: theme.palette.secondary.main,
    columnSpan: 'all',
    fontSize: theme.typography.h5.fontSize,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginLeft: '0',
      fontSize: '1.5rem',
    },
  },
  quote: {
    padding: '2em 3.5em',
    marginBottom: '1.5em',
    display: 'block',
    background: 'rgba(19,24,31, .85)',
    color: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 1.8rem',
    },

    '&>p': {
      fontWeight: 300,
      lineHeight: '2',
      wordSpacing: '.1em',
      [theme.breakpoints.down('sm')]: {
        wordSpacing: 'inherit',
        lineHeight: '1.5',
      },
    },
  },
  link: {
    color: theme.palette.secondary.light,
  },
  quote2: {
    display: 'flex',
    marginTop: '1rem',
    marginBottom: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    columnSpan: 'all',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
      marginBottom: '1.5rem',
      flexDirection: 'column',
    },

    '&:first-child': {
      background: `no-repeat url('${img}') center`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '22vh',
      height: 'auto',

      [theme.breakpoints.down('sm')]: {
        margin: 0,
        // background: `none`,
      },
    },
    '&>p': {
      padding: '2em 3.5em',
      margin: '-2rem 1rem',

      background: 'rgba(19,24,31, .85)',
      color: theme.palette.primary.light,
      width: '50%',

      marginLeft: 'auto',
      fontWeight: 300,
      lineHeight: '2',
      wordSpacing: '.1em',

      [theme.breakpoints.down('sm')]: {
        margin: '0',
        padding: '1rem 1.8rem',
        flex: 1,
        wordSpacing: 'inherit',
        lineHeight: '1.5',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
      },
    },
  },
}));
