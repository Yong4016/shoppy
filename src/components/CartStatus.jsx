import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

const CartStatus = () => {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({ queryKey: ['cart'], queryFn: () => getCart(uid) });

  return (
    <div className='relative'>
      <BsCartFill className='text-3xl' />
      {products && <p className='w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-2 -right-3'>{products.length}</p>}
    </div>
  );
};

export default CartStatus;
