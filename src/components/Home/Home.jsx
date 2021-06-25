import React from 'react';

import {
  Typography,
  Button,
  Grid,
  Container,
  Divider,
} from '@material-ui/core';
import CategoryCard from './CategoryCard/CategoryCard';
import useStyles from './styles';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import Map from './Map/Map';

const Home = ({ categories }) => {
  const classes = useStyles();
  if (!categories) return 'Loading...';
  return (
    <Container style={{ marginTop: '3rem' }} component="main">
      {/* <Typography variant="h4" component="h1">
        header 1
      </Typography>
      <Typography variant="h2">header 2</Typography>
      <Typography variant="h3">header 3</Typography>
      <Typography variant="subtitle1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        voluptas esse consectetur corrupti natus maiores eos sit assumenda,
        voluptatem saepe.
      </Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="caption">subtitle that i need</Typography>
      <br />
      <br />
      <Button variant="outlined" color="secondary" disableElevation>
        Empty Cart
      </Button>
      <Button variant="contained" color="primary" disableElevation>
        Checkout
      </Button>
      <br />
      <br />
      <br /> */}
      <Container className={classes.hero}>
        <Grid
          container
          className={classes.introGrid}
          justify="flex-end"
          alignItems="center"
        >
          <Grid item className={classes.introItem} xs={12} md={4}>
            <Typography
              variant="body1"
              color="primary"
              className={classes.intro}
              component="div"
            >
              <img src={`${logo}`} alt="logo" className={classes.logo} />
              <ul className={classes.list}>
                <li>hungarian delicaties</li>
                <li>dutch preferences</li>
                <li>premium CCH cakes</li>
                <li>kürtőskalács</li>
                <li>vegan & gluten-free choices</li>
                <li>weekend specials</li>
                <li>beekeepers' honey</li>
                <li>babyshower gifts</li>
              </ul>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disableElevation
                component={Link}
                to="/shop"
              >
                Shop Now
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={2} className={classes.grid}>
        {categories.map((category) => (
          <Grid key={category.id} item xs={12} sm={6} md={4}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
      <Grid className={classes.info} spacing={1} container>
        <Grid item sm={12} md={5} className={classes.infoItem}>
          <Typography variant="h6" gutterBottom>
            Opening Hours
          </Typography>
          <Typography component="ul" variant="body1" className={classes.box}>
            <Typography component="li" className={classes.li} gutterBottom>
              <span>Monday - Saturday</span> <span>11:30-20:30</span>
            </Typography>
            <Typography component="li" className={classes.li} gutterBottom>
              <span>Sunday</span> <span>11:30-18:30</span>
            </Typography>
          </Typography>
          <Typography variant="h6" gutterBottom style={{ marginTop: '1rem' }}>
            Delivery Policy
          </Typography>
          <Typography variant="body1" className={classes.box}>
            We deliver in all cities in the Netherlands.
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          variant="middle"
          className={classes.divider}
        />
        <Grid item sm={12} md={5} className={classes.infoItem}>
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>
          <Typography variant="body1" className={classes.box}>
            Zeilstraat 12, 1075 SG, Amsterdam
          </Typography>
          <Typography variant="h6" gutterBottom style={{ marginTop: '1rem' }}>
            Contact
          </Typography>
          <Typography
            variant="body1"
            className={classes.box}
            style={{ lineHeight: '2' }}
          >
            contact@chimneycakefactory.com
            <br />
            Invoices: factuur@chimneycakefactory.com
            <br />
            Human Resources: hr@chimneycakefactory.com
          </Typography>
        </Grid>
      </Grid>
      <Container style={{ marginTop: '1rem', marginBottom: '3rem' }}>
        <Map />
      </Container>
    </Container>
  );
};

export default Home;
