import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill, BsCartFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='flex justify-between p-2 border-b border-gray-300'>
      <Link
        to='/'
        className='flex items-center text-4xl text-brand font-semibold'
      >
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex  items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link
          to='/products/new'
          className='text-2xl'
        >
          <BsFillPencilFill />
        </Link>
        <Link
          to='/cart'
          className='text-2xl'
        >
          <BsCartFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
};

export default Header;
