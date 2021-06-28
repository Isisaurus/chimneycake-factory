import React, { useState, useEffect } from 'react';
import { Container, Toolbar, Link as LinkEl } from '@material-ui/core';
import useStyles from './styles.js';
import { Link } from 'react-router-dom';
import { Loading } from './../../index';

const CategoryBar = ({ categories, slug }) => {
  const classes = useStyles();

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (slug) {
      setActive(slug);
    } else {
      setActive('all');
    }
  }, [slug]);

  return categories ? (
    <Container style={{ padding: '0' }}>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <LinkEl
          color="inherit"
          component={Link}
          variant="caption"
          to="/shop"
          className={classes.toolbarLink}
          style={{
            background: active === 'all' && 'rgba(223, 209, 178, 0.8)',
          }}
        >
          Most popular
        </LinkEl>
        {categories.map((category) => (
          <LinkEl
            color="inherit"
            component={Link}
            key={category.id}
            variant="caption"
            to={`/shop/${category.slug}`}
            className={classes.toolbarLink}
            style={{
              background:
                active === category.slug && 'rgba(223, 209, 178, 0.8)',
            }}
          >
            {category.name}
          </LinkEl>
        ))}
      </Toolbar>
    </Container>
  ) : (
    <Loading />
  );
};

export default CategoryBar;
