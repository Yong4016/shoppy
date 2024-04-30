import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <li className='rounded-lg overflow-hidden shadow-md cursor-pointer'>
      <img className='w-full'
        src={product.image}
        alt={product.title}
      />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{product.title}</h3>
        <p>{`$${product.price}`}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{product.category}</p>
    </li>
  );
};

export default ProductCard;
