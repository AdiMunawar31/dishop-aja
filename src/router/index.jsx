import { useSelector } from 'react-redux';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Cart from '../pages/Cart';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Success from '../pages/Success';
import Test from '../pages/Test';

function Router() {
  const user = useSelector((state) => state.user?.currentUser);
  console.log(user);
  return (
    <div>
      <BrowserRouter>
        {user ? (
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products/:category" element={<Product />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/test" element={<Test />} />
            <Route path="/success" element={<Success />} />

          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default Router;
