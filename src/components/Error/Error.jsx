import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Error = (error) => {
  console.log(error);
  return (
    <Container>
      <Typography variant="h6" color="primary" gutterBottom>
        Sorry! There was an error. Please, try again later!
      </Typography>
      <Button component={Link} to="/" variant="outlined" type="button">
        Back to Home
      </Button>
    </Container>
  );
};

export default Error;
