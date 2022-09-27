/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardProduct from './CardProduct';

function MoreProduct() {
  const [products, setProducts] = useState([]);

  const url = 'https://dishop-aja-api.herokuapp.com/v1/products';

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(url);
        setProducts(res.data.data.products);
      } catch (error) {
        // console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="mt-16">
      <h3 className="text-gray-600 text-2xl font-medium">More Product</h3>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.slice(0, 4).map((item) => (
          <Link to={`/product/${item._id}`}>
            <CardProduct item={item} key={item.id} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoreProduct;
