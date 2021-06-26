import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { commerce } from '../../lib/commerce';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  const [filteredProducts, setFilteredProducts] = useState([]);

  const { slug } = useParams();

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
      <div className={classes.toolbar}></div>
      <Grid container justify="center" spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
