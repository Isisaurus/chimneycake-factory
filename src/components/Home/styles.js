import { makeStyles } from '@material-ui/core/styles';
import heroImg from './../../assets/hero.jpg';
export default makeStyles((theme) => ({
  main: {
    marginTop: '3rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '1.5rem',
    },
  },
  hero: {
    padding: '0',
    position: 'relative',
    height: '80vh',
    maxHeight: '40rem',
    // background: `url(${heroImg}) no-repeat center`,
    backgroundImage: `linear-gradient(to top right, rgba(0,0,0,0.6) 0%, rgba(0,0,0, .3) 100%), url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xs')]: {
      height: '90vh',
    },
  },
  introGrid: {
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      top: '0',
      right: '0',
      bottom: '0',
    },
    [theme.breakpoints.up('md')]: {
      top: '-2rem',
      right: '2rem',
      height: '110%',
      bottom: '-2rem',
    },
  },
  introItem: {
    background: 'rgba(19,24,31, 0.8)',
    padding: '3rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    listStylePosition: 'outside',
    lineHeight: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: '100%',
    maxWidth: '18rem',
    padding: '1rem',
  },
  list: {
    marginTop: '2.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  button: {
    padding: '.8rem 2.5rem',
    marginTop: '2.5rem',
  },
  grid: {
    padding: '0',
    marginTop: '5rem',
    marginBottom: '5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
      marginBottom: '2rem',
    },
  },
  info: {
    padding: '0 2rem',
    marginTop: '5rem',
    marginBottom: '5rem',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    color: '#444749',
    [theme.breakpoints.down('sm')]: {
      padding: '.5em',
      marginTop: '2rem',
      marginBottom: '2rem',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  infoItem: {
    width: '100%',
  },
  divider: {
    background: 'rgba(223,209,178, .8)',
    width: '3px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  box: {
    display: 'block',
    padding: '1em',
    listStyle: 'none',
    [theme.breakpoints.down('xs')]: {
      padding: '0',
      fontSize: '1rem',
    },
  },
  li: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
