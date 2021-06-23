import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  const getProductById = async (id) => {
    const res = await commerce.products.retrieve(id);
    // console.log(res);
    // name, description, categories
    // img: media.source
    setProduct(res);
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  if (!product) return 'Loading...';

  return (
    <>
      <div style={{ margin: '100px 0' }}>
        {product.name}, {id}, {product.media.source}, {product.description}
      </div>
      <div>
        {product.categories.map((cat) => (
          <Link key={cat.slug} to={`/shop/:${cat.slug}`}>
            {cat.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
