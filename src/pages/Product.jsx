import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Layout from './Layout';

function Product() {
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState('newest');
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const handleFilters = (e) => {
    const { value } = e.target;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Layout>
      <span className="flex pt-8 pl-16 capitalize text-2xl text-gray-600">
        <h1>Category :</h1>
        <h1 className="font-bold ml-2 text-black">{category}</h1>
      </span>
      <div className="mt-12 px-16">
        <div className="flex items-center justify-between">
          <div className="flex justify-center">
            <h3 className="text-gray-600 text-2xl font-medium">Filter Products</h3>
            <select onChange={handleFilters} name="size" className="ml-4 px-4 py-3 border -mt-2 bg-blue-50">
              <option disabled>Size</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <select onChange={handleFilters} name="color" className="ml-4 px-4 py-3 border -mt-2 bg-blue-50">
              <option disabled>Color</option>
              <option>white</option>
              <option>black</option>
              <option>grey</option>
              <option>blue</option>
              <option>red</option>
              <option>green</option>
            </select>
          </div>
          <div className="flex justify-center">
            <h3 className="text-gray-600 text-2xl font-medium">Sort Products</h3>
            <select className="ml-4 px-4 py-3 border -mt-2 bg-blue-50" onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
        <ProductList category={category} filters={filters} sort={sort} />
      </div>
    </Layout>
  );
}

export default Product;
