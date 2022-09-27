import { useEffect, useState } from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Loader from '../components/Loader';
import Cart from '../pages/Cart';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Test from '../pages/Test';

function Router() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const user = true;
  return (
    <div>
      {!isLoading ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            <Route path="/products/:category" element={<Product />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>

      ) : <Loader />};
    </div>
  );
}

export default Router;
