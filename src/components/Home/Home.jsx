import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ categories }) => {
  return (
    <main>
      {categories.map((category) => (
        <div>
          <Link to={`/shop/${category.slug}`} key={category.slug}>
            {category.name}
          </Link>
        </div>
      ))}
    </main>
  );
};

export default Home;
