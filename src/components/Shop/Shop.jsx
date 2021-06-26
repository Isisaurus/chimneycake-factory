import React from 'react';
import { Products } from './../../components';
import CategoryBar from './CategoryBar/CategoryBar';
import { Container } from '@material-ui/core';
import { Hero } from './../index';
import { useParams } from 'react-router-dom';

const Shop = ({ products, handleAddToCart, categories }) => {
  const { slug } = useParams();

  return (
    <Container component="main">
      <Hero />
      <CategoryBar categories={categories} slug={slug} />
      <Products products={products} onAddToCart={handleAddToCart} slug={slug} />
    </Container>
  );
};

export default Shop;
