import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';

import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  // console.log(product.price.formatted_with_symbol);
  return (
    <Card className={classes.root}>
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
      </Link>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<AddShoppingCart />}
          className={classes.button}
          onClick={() => {
            onAddToCart(product.id, 1);
          }}
          disableElevation
        >
          <Typography variant="button" style={{ textTransform: 'none' }}>
            Add to Cart
          </Typography>
        </Button>
      </CardActions>
      <CardContent className={classes.cardContent}>
        <div className={classes.details}>
          <Typography variant="subtitle1" style={{ paddingRight: '.3rem' }}>
            {product.name}{' '}
          </Typography>
          <Typography variant="subtitle1">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>

        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          className={classes.description}
        />
      </CardContent>
    </Card>
  );
};

export default Product;
