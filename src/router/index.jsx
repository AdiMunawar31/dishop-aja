import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Cart from '../pages/Cart';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Test from '../pages/Test';

function Router() {
  const user = true;
  return (
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

  );
}

export default Router;
