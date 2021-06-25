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
        <Toolbar component={Container} className={classes.cartBar}>
          {location.pathname !== '/cart' && location.pathname !== '/checkout' && (
            <IconButton
              area-label="Show cart items"
              color="inherit"
              component={Link}
              to="/cart"
              className={classes.button}
            >
              <Typography variant="button" className={classes.buttonText}>
                Your Cart
              </Typography>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart className={classes.buttonIcon}></ShoppingCart>
              </Badge>
            </IconButton>
          )}
        </Toolbar>

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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
