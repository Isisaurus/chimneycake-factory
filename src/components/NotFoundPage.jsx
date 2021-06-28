import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ message, redirect, locationName }) => {
  return (
    <Container
      style={{
        marginTop: '2.5rem',
        minHeight: '55vh',
      }}
    >
      <Container>
        <Typography variant="h6" color="secondary" gutterBottom>
          {message ? `Sorry! ${message}` : `Sorry! This page doesn't exist.`}
        </Typography>
        <Typography variant="overline" color="textSecondary" gutterBottom>
          404. Page not found.
        </Typography>
      </Container>
      <Container style={{ marginTop: '1.5rem' }}>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          component={Link}
          to={redirect ? `${redirect}` : '/'}
          disableElevation
        >
          {locationName ? `Back to ${locationName}` : `Back to Home Page`}
        </Button>
      </Container>
    </Container>
  );
};

export default NotFoundPage;
