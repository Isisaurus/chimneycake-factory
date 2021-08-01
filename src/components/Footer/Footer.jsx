import React from 'react';
import useStyles from './styles';
import { Container, Grid, Typography, Divider } from '@material-ui/core';

import sprite from './../../assets/icons/sprite.svg';

const Footer = () => {
  const facebookLink = 'https://www.instagram.com/cch_amsterdam/';
  const instagramLink = 'https://www.facebook.com/CCHAmsterdam/';
  const classes = useStyles();
  return (
    <Grid container component="footer" className={classes.footer}>
      <Container className={classes.footerContainer}>
        <Typography variant="body2" className={classes.grow}>
          Copyright@ChimneyCakeFactory 2021
        </Typography>
        <div className={classes.smContainer}>
          <a href={facebookLink} target="_blank" rel="noreferrer">
            <svg className={classes.icon} style={{ marginRight: '1rem' }}>
              <use xlinkHref={`${sprite}#icon-facebook`}></use>
            </svg>
          </a>
          <a href={instagramLink} target="_blank" rel="noreferrer">
            <svg className={classes.icon}>
              <use xlinkHref={`${sprite}#icon-instagram`}></use>
            </svg>
          </a>
        </div>
      </Container>

      <Container
        style={{
          padding: '0 0 1rem',
          textAlign: 'center',
        }}
      >
        <Divider
          orientation="horizontal"
          variant="middle"
          style={{
            backgroundColor: '#fff',
            opacity: '.8',
            height: '3px',
            margin: '1rem 0',
          }}
        />
        <Typography variant="caption" style={{ color: '#444749' }}>
          This website was created out of adoration for the work of the
          <a
            href="https://www.cchshop.nl/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Chimney Cake House
          </a>
          located in Amsterdam.
          <br />
          Designed and developed by
          <a
            href="https://diana-vitanyi.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Diana Vitanyi
          </a>
          .
        </Typography>
      </Container>
    </Grid>
  );
};

export default Footer;
