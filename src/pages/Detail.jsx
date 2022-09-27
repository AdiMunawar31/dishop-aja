import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import ProductDetail from '../components/ProductDetail';
import { publicRequest } from '../helpers/requestMethods';
import Layout from './Layout';

function Detail() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(product);

  useEffect(() => {
    setIsLoading(true);
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${id}`);
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
