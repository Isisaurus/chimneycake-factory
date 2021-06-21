import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './product/Product';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Chocolate Cake',
      description: 'Lorem ipsum dolor simet.',
      price: '$5',
      image:
        'https://images.pexels.com/photos/1998635/pexels-photo-1998635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 2,
      name: 'Banana Fudge',
      description: 'Lorem ipsum dolor simet.',
      price: '$6',
      image:
        'https://images.pexels.com/photos/5638516/pexels-photo-5638516.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
