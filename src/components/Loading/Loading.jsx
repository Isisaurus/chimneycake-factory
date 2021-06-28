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
        marginTop: '2.5rem',
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Loading;
