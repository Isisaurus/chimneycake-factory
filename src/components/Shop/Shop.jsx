import React from 'react';
import { Products } from './../../components';
import CategoryBar from './CategoryBar/CategoryBar';
import { Container } from '@material-ui/core';
import { Hero } from './../index';

const Shop = ({ products, handleAddToCart, categories }) => {
  return (
    <Container component="main">
      <Hero />
      <CategoryBar categories={categories} />
      <Products products={products} onAddToCart={handleAddToCart} />
    </Container>
  );
};

export default Shop;
