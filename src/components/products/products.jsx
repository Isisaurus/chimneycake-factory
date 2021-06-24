import React from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import Product from './product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  const { slug } = useParams();

  console.log(slug);

  if (!products) return 'Loading...';

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
