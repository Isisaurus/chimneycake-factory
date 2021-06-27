import { makeStyles } from '@material-ui/core/styles';
import heroImg from './../../assets/heroImg.jpg';

export default makeStyles((theme) => ({
  hero: {
    height: 'auto',
    maxHeight: '10rem',
    minHeight: '5rem',
    width: '100%',
    background: `no-repeat url('${heroImg}') center`,
    // background: 'purple',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    marginTop: '2rem',
  },
  logo: {
    maxWidth: '15rem',
    width: '40%',
    minWidth: '12rem',
    padding: '1.5rem',
  },
}));
