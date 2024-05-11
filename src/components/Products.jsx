import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';

const Products = () => {
  const {
    productsQuery: { isPending, error, data: products },
  } = useProducts();

  return (
    <>
      {isPending && <p className='text-2xl ml-4'>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </ul>
    </>
  );
};

export default Products;
