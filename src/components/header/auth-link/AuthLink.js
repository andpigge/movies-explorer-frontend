import React from 'react';
import { Link } from 'react-router-dom';
import './authLink.css';

function AuthLink() {
  return (
    <ul className='header__auth-list'>
      <li className='header__auth-item'>
        <Link to='/' className='header__auth-link' >
          Регистрации
        </Link>
      </li>
      <li className='header__auth-item'>
        <Link to='/' className='header__auth-link header__auth-link_bg_dark' >
          Войти
        </Link>
      </li>
    </ul>
  );
}

export default AuthLink;
