import { makeStyles } from '@material-ui/core/styles';
import heroImg from './../../assets/hero.jpg';
export default makeStyles((theme) => ({
  hero: {
    padding: '0',
    position: 'relative',
    height: '80vh',
    maxHeight: '40rem',
    background: `url(${heroImg}) no-repeat center`,
  },
  hero_img: {},
  introGrid: {
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      width: '100%',
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
    marginTop: '5rem',
    marginBottom: '5rem',
  },
}));
