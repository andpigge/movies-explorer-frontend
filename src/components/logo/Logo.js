import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

// Картинка
import logo from '../../images/svg/logo-icon.svg';

function Logo() {
  return (
    <Link to='/' className='logo' >
      <img src={ logo } alt='Логотип' className='logo__img' />
    </Link>
  );
}

export default Logo;
