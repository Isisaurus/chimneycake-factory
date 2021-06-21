import React from 'react';
import Grid from '@material-ui/core';

import Product from './Product/Product';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'Lorem ipsum dolor simet.',
      price: '$5',
    },
    {
      id: 2,
      name: 'Banana Fudge',
      description: 'Lorem ipsum dolor simet.',
      price: '$6',
    },
  ];
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {/* markup, later fetch from commerce js api */}
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
