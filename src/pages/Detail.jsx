import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import ProductDetail from '../components/ProductDetail';
import Layout from './Layout';

function Detail() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(product);

  const url = `https://dishop-aja-api.herokuapp.com/v1/products/${id}`;

  useEffect(() => {
    setIsLoading(true);
    const getProduct = async () => {
      try {
        const res = await axios.get(url);
        setProduct(res.data.data.product);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return (
    <Layout>
      {isLoading && product == null ? <Loader /> : <ProductDetail product={product} /> }
    </Layout>
  );
}

export default Detail;
