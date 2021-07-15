import React from 'react';
// import useStyles from './style';
import { Container, CircularProgress } from '@material-ui/core';

const Loading = () => {
  //   const classes = useStyles();
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Loading;
