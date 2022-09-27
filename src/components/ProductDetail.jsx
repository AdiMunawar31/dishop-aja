import React, { useState } from 'react';
import { AiFillMinusSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { IoBagCheckOutline } from 'react-icons/io5';
import Loader from './Loader';
import MoreProduct from './MoreProduct';

function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  console.log(color, size);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {

  };

  return (
    <main className="my-8">
      {product ? (
        <div className="container mx-auto px-6">
          <div className="md:grid md:grid-cols-12">
            <div className="col-span-1" />
            <div className="w-full h-64 md:col-span-4 lg:h-full rounded-lg mt-10">
              <img
                className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                src={product.image}
                alt="Brand Images"
              />
            </div>
            <div className="w-full max-w-lg mx-auto md:ml-20 mt-12 md:col-span-6 h-full">
              <h3 className="text-gray-700 uppercase text-2xl font-semibold mb-4">
                {product.title}
              </h3>
              <span className="text-blue-500 text-3xl font-semibold">Rp. {Intl.NumberFormat('id').format(product.price)}</span>

              <div className="mt-6 grid grid-cols-12">
                <div className="text-gray-700 text-md col-span-2" htmlFor="count">
                  Protection :
                </div>
                <div className="flex items-center ml-4 col-span-10">
                  <div className="px-4">
                    Proteksi Kerusakan Produk
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-12">
                <div className="text-gray-700 text-md col-span-2" htmlFor="count">
                  Count:
                </div>
                <div className="flex items-center ml-4 -mt-0.5 col-span-10 border w-24">

                  <button
                    type="button"
                    className="text-gray-500 focus:outline-none focus:text-gray-600"
                    onClick={() => handleQuantity('dec')}
                  >
                    <AiFillMinusSquare className="text-red-500 text-3xl" />
                  </button>

                  <span className="text-gray-700 text-lg mx-3 font-bold">{quantity}</span>

                  <button
                    type="button"
                    className="text-gray-500 focus:outline-none focus:text-gray-600 ml-1"
                    onClick={() => handleQuantity('inc')}
                  >
                    <BsFillPlusSquareFill className="text-blue-500 text-2xl" />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-12">
                <div className="text-gray-700 text-md col-span-2 mt-1.5" htmlFor="count">
                  Size :
                </div>
                <div className="flex items-center ml-4 col-span-10">
                  {product.size?.map((sizes) => (
                    <button
                      type="button"
                      className={`px-6 py-1 rounded border-2 border-gray-200 mr-2 uppercase active:bg-blue-200 ${size !== '' && size === sizes ? 'bg-blue-200 border-blue-600' : ''}`}
                      key={sizes}
                      onClick={() => setSize(sizes)}
                    >
                      {sizes}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-12">
                <div className="text-gray-700 text-md col-span-2 mt-1.5" htmlFor="count">
                  Color :
                </div>
                <div className="flex items-center ml-4 col-span-10">
                  {product.color?.map((colors) => (
                    <button
                      type="button"
                      className={`px-6 py-1 rounded border-2 border-gray-200 mr-2 uppercase active:bg-blue-200 ${color !== '' && color === colors ? 'bg-blue-200 border-blue-600' : ''}`}
                      key={colors}
                      onClick={() => setColor(colors)}
                    >
                      {colors}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center mt-10">
                <button type="button" className="mx-2 flex items-center text-blue-100 border bg-blue-500 rounded-md py-2 px-6 hover:bg-blue-400 focus:outline-none">
                  <IoBagCheckOutline className="text-xl text-white mr-2" />
                  Order Now
                </button>
                <button type="button" className="mx-2 flex items-center text-blue-500 border border-blue-500 rounded-md py-2 px-6 hover:bg-blue-200 focus:outline-none" onClick={addToCart}>
                  <AiOutlineShoppingCart className="text-xl text-blue-500 mr-2" />
                  <span>Add To Cart</span>
                </button>
              </div>
            </div>
          </div>
          <MoreProduct />
        </div>
      ) : <Loader />}
    </main>
  );
}

export default ProductDetail;
