import { makeStyles } from '@material-ui/core/styles';
import heroImg from './../../assets/heroImg.jpg';

export default makeStyles((theme) => ({
  hero: {
    height: '20vh',
    maxHeight: '13rem',
    minHeight: '8rem',
    width: '100%',
    background: `no-repeat url('${heroImg}') center`,
    // background: 'purple',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
  },
  logo: {
    maxWidth: '15rem',
    width: '40%',
    minWidth: '8rem',
  },
}));
