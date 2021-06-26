import React from 'react';
import { Container, Toolbar } from '@material-ui/core';
import useStyles from './styles.js';
import { Link } from 'react-router-dom';

const CategoryBar = ({ categories }) => {
  const classes = useStyles();
  return categories ? (
    <Container>
      toolbar here
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {categories.map((category) => (
          <Link
            color="inherit"
            noWrap
            key={category.title}
            variant="body2"
            to={`shop/${category.slug}`}
            className={classes.toolbarLink}
          >
            {category.name}
          </Link>
        ))}
      </Toolbar>
    </Container>
  ) : (
    'Loading...'
  );
};

export default CategoryBar;
