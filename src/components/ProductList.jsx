/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardProduct from './CardProduct';

function ProductList({ category, filters, sort }) {
  // console.log(category);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log(products);
  const url = 'https://dishop-aja-api.herokuapp.com/v1/products';

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(category ? `${url}?category=${category}` : url);
        setProducts(res.data.data.products);
      } catch (error) {

        // console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    category && setFilteredProducts(
      products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))),
    );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
        {category ? filteredProducts.map((item) => (
          <Link to={`/product/${item._id}`}>
            <CardProduct item={item} key={item.id} />
          </Link>
        ))
          : products.slice(0, 8).map((item) => (
            <Link to={`/product/${item._id}`}>
              <CardProduct item={item} key={item.id} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
