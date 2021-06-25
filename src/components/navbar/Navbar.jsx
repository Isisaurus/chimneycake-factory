import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  // MenuItem,
  // Menu,
  Typography,
  Container,
} from '@material-ui/core';
import { Link as AppLink } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar component={Container} className={classes.toolbar}>
          <AppLink
            variant="button"
            color="secondary"
            component={NavLink}
            exact
            activeClassName={classes.active}
            to="/"
            className={classes.link}
          >
            Home
          </AppLink>
          <AppLink
            variant="button"
            color="secondary"
            component={NavLink}
            activeClassName={classes.active}
            to="/shop"
            className={classes.link}
          >
            Shop
          </AppLink>
          <AppLink
            variant="button"
            color="secondary"
            component={NavLink}
            activeClassName={classes.active}
            to="/about"
            className={classes.link}
          >
            About us
          </AppLink>
          <AppLink
            variant="button"
            color="secondary"
            component={NavLink}
            activeClassName={classes.active}
            to="/recipe"
            className={classes.link}
          >
            Recipe*
          </AppLink>
          <div className={classes.grow}></div>
          {(location.pathname !== '/cart' ||
            location.pathname !== '/checkout') && (
            <div className={classes.button}>
              <IconButton
                area-label="Show cart items"
                color="inherit"
                component={Link}
                to="/cart"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart></ShoppingCart>
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
