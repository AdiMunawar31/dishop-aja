import React from 'react';
import Loader from './Loader';

function CardProduct({ item }) {
  return (
    <div className="mr-2 w-72 xl:mb-0 mb-8 shadow-md">
      {item ? (
        <div>
          <div>
            <img src={item.image ? item.image : <Loader />} className="w-full h-52 rounded-tr-md rounded-tl-md" alt="brand" />
          </div>
          <div className="bg-blue-50 h-28 rounded-br-md rounded-bl-md">
            <div className="px-4 py-2 flex flex-col h-full justify-between">
              <div className="flex items-center">
                <h2 className="text-lg">{item.title}</h2>
              </div>

              <div className="py-1 flex items-center justify-between">
                <h2 className="text-blue-700 text-lg font-semibold">Rp. {Intl.NumberFormat('id').format(item.price)}</h2>
                <h3 className="text-gray-400 text-sm font-semibold">10RB+ Terjual</h3>
              </div>
            </div>
          </div>
        </div>
      ) : <Loader />}
    </div>
  );
}

export default CardProduct;
