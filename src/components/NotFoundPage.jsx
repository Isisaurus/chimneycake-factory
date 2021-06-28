import React from 'react';
import { Container, Typography } from '@material-ui/core';

const NotFoundPage = () => {
  return (
    <Container
      style={{
        marginTop: '2.5rem',
        minHeight: '55vh',
      }}
    >
      <Container>
        <Typography variant="h6" color="secondary" gutterBottom>
          Sorry! This page doesn't exist.
        </Typography>
        <Typography variant="overline" color="textSecondary" gutterBottom>
          404. Page not found.
        </Typography>
      </Container>
    </Container>
  );
};

export default NotFoundPage;
