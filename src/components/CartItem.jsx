import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';

const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

const CartItem = ({ product, uid }) => {
  const handleMinus = () => {
    if (product.quantity === 1) return;
    addOrUpdateToCart(uid, { ...product, quantity: product.quantity - 1 });
  };
  const handlePlus = () => addOrUpdateToCart(uid, { ...product, quantity: product.quantity + 1 });

  const handleDelete = () => removeFromCart(uid, product.id);

  return (
    <li className='flex justify-between my-2 items-center'>
      <img
        className='w-24 md:w-48 rounded-lg'
        src={product.image}
        alt={product.title}
      />
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{product.title}</p>
          <p className='text-xl font-bold text-brand'>{product.option}</p>
          <p>${product.price}</p>
        </div>
        <div className='text-2xl flex items-center'>
          <AiOutlineMinusSquare
            className={ICON_CLASS}
            onClick={handleMinus}
          />
          <span>{product.quantity}</span>
          <AiOutlinePlusSquare
            className={ICON_CLASS}
            onClick={handlePlus}
          />
          <RiDeleteBin5Fill
            className={ICON_CLASS}
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
