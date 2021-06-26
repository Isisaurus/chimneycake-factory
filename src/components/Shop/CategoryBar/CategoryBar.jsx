import React from 'react';
import { Container, Toolbar, Link as LinkEl } from '@material-ui/core';
import useStyles from './styles.js';
import { Link } from 'react-router-dom';

const CategoryBar = ({ categories }) => {
  const classes = useStyles();
  return categories ? (
    <Container style={{ padding: '0' }}>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {categories.map((category) => (
          <LinkEl
            color="inherit"
            component={Link}
            key={category.id}
            variant="caption"
            to={`/shop/${category.slug}`}
            activeClassName={classes.activeLink}
            className={classes.toolbarLink}
          >
            {category.name}
          </LinkEl>
        ))}
      </Toolbar>
    </Container>
  ) : (
    'Loading...'
  );
};

export default CategoryBar;
