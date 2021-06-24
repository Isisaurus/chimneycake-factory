import React from 'react';

import { Typography, Button, Grid, Container } from '@material-ui/core';
import CategoryCard from './CategoryCard/CategoryCard';

const Home = ({ categories }) => {
  if (!categories) return 'Loading...';
  return (
    <Container style={{ marginTop: '100px' }} component="main">
      <Typography variant="h4" component="h1">
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
      <br />
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid key={category.id} item xs={12} sm={4}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
