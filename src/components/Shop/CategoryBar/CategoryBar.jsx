import React from 'react';
import { Container, Toolbar, Link as LinkEl } from '@material-ui/core';
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
        {categories.map((section) => (
          <LinkEl
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            // href={section.url}
            className={classes.toolbarLink}
          >
            {section.name}
          </LinkEl>
        ))}
      </Toolbar>
    </Container>
  ) : (
    'Loading...'
  );
};

export default CategoryBar;
