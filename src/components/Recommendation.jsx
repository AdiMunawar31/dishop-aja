import React from 'react';
import { Link } from 'react-router-dom';
import { recommendation } from '../data';
import CardProduct from './CardProduct';

function Recommendation() {
  return (
    <div className="mt-16">
      <h3 className="text-gray-600 text-2xl font-medium">Recommendations Product</h3>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {recommendation.map((item) => (
          <Link to="/product/123">
            <CardProduct item={item} key={item.id} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
