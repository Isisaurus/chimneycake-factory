import React from 'react';
import { Container } from '@material-ui/core';
import logo from './../../assets/logo.png';
import useStyles from './styles';

const Hero = () => {
  const classes = useStyles();
  return (
    <Container className={classes.hero}>
      <img
        src={logo}
        alt="Chimney Cake Factory Logo"
        className={classes.logo}
      />
    </Container>
  );
};

export default Hero;
