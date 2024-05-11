import React from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardList } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

const NavBar = () => {
  const { user, signInWithGoogle, signOutWithGoogle } = useAuthContext();
  return (
    <header className='flex justify-between p-2 border-b border-gray-300'>
      <Link
        to='/'
        className='flex items-center text-4xl text-brand font-semibold'
      >
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-6 font-semibold'>
        <Link
          to='/products'
          className='text-3xl text-gray-700'
          title='Show Products'
        >
          <FaClipboardList />
        </Link>
        {user && user.isAdmin && (
          <Link
            to='/products/new'
            className='text-3xl text-gray-700'
            title='Add New'
          >
            <BsFillPencilFill />
          </Link>
        )}
        {user && (
          <Link
            to='/cart'
            className='text-gray-700'
            title='MyCart'
          >
            <CartStatus />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && (
          <Button
            text={'Login'}
            onClick={signInWithGoogle}
          />
        )}

        {user && (
          <Button
            text={'Logout'}
            onClick={signOutWithGoogle}
          />
        )}
      </nav>
    </header>
  );
};

export default NavBar;
