import React from 'react';
import { ScaleLoader } from 'react-spinners';

function Loader() {
  return (
    <div className="h-96 w-full flex justify-center items-center">
      <ScaleLoader loading size={50} color="#3B82F6" />
    </div>
  );
}

export default Loader;
