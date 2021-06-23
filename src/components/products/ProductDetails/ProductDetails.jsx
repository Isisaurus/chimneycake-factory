import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
      <div style={{ margin: '100px 0' }}>Product Overview {id}</div>
    </>
  );
};

export default ProductDetails;
