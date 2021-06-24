import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ categories }) => {
  if (!categories) return 'Loading...';
  return (
    <main style={{ marginTop: '200px' }}>
      {categories.map((category) => (
        <Link key={category.id} to={`/shop/${category.slug}`}>
          {category.name}
        </Link>
      ))}
    </main>
  );
};

export default Home;
