import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  // MenuItem,
  // Menu,
  Typography,
} from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/logo.png';

import useStyles from './styles';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            color="inherit"
            component={Link}
            to="/"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <Typography
            variant="h6"
            className={classes.title}
            color="inherit"
            component={Link}
            to="/shop"
          >
            Shop
          </Typography>
          <div className={classes.grow}></div>
          {location.pathname !== '/cart' && (
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
