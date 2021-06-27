import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  parent: {
    marginTop: '2.5rem',
    columnCount: '2',
    columnFill: 'auto',
    columnGap: '2.5rem',
    '&:first-child': {
      marginTop: '0',
    },
  },
  header: {
    marginTop: '2em',
    marginBottom: '1em',
    marginLeft: '1.5em',
    color: theme.palette.secondary.light,
    columnSpan: 'all',
  },
  quote: {
    padding: '2em 3.5em',
    marginBottom: '1.5em',
    display: 'block',
    background: 'rgba(19,24,31, .85)',
    color: theme.palette.primary.light,

    '&>p': {
      fontWeight: 300,
      lineHeight: '2',
      wordSpacing: '.1em',
    },
  },
  link: {
    color: theme.palette.secondary.light,
  },
}));
