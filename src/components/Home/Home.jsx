import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

const Home = ({ categories }) => {
  if (!categories) return 'Loading...';
  return (
    <main style={{ marginTop: '200px' }}>
      <Typography variant="h4" component="h1">
        header 1
      </Typography>
      <Typography variant="h2">header 2</Typography>
      <Typography variant="h3">header 3</Typography>
      <Typography variant="h4">header 4</Typography>
      <Typography variant="h5">header 5</Typography>
      <Typography variant="h6">header 6</Typography>
      <Typography variant="subtitle1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        voluptas esse consectetur corrupti natus maiores eos sit assumenda,
        voluptatem saepe.
      </Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="button">button</Typography>
      <br />
      <Typography variant="caption">caption</Typography>
      <br />
      <Typography variant="overline">overline</Typography>
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
      {categories.map((category) => (
        <Link key={category.id} to={`/shop/${category.slug}`}>
          {category.name}
        </Link>
      ))}
    </main>
  );
};

export default Home;
