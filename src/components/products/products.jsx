import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';

import { commerce } from '../../lib/commerce';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart, slug }) => {
  const classes = useStyles();

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleCategory = async () => {
    const res = await commerce.products.list({
      category_slug: [slug],
    });
    setFilteredProducts(res.data);
  };

  useEffect(() => {
    if (slug) {
      handleCategory();
    } else if (products) {
      setFilteredProducts(products);
    }
    // eslint-disable-next-line
  }, [slug, products]);

  if (!filteredProducts) return 'Loading...';
  return (
    <Container className={classes.content}>
      <Grid container spacing={4} className={classes.grid}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
