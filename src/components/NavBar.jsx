import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardList } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill, BsCartFill } from 'react-icons/bs';
import { onUserStateChange, signInWithGoogle, signOutWithGoogle } from '../api/firebase';
import User from './User';
import Button from './ui/Button';

const NavBar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

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
          className='text-2xl'
          title='Show All'
        >
          <FaClipboardList />
        </Link>
        {user && user.isAdmin && (
          <Link
            to='/products/new'
            className='text-2xl'
            title='Add New'
          >
            <BsFillPencilFill />
          </Link>
        )}

        <Link
          to='/cart'
          className='text-2xl'
          title='MyCart'
        >
          <BsCartFill />
        </Link>
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
