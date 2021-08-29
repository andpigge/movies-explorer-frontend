import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

// Картинка
import logo from '../../images/svg/logo-icon.svg';

// Компоненты
// import AuthLink from './auth-link/AuthLink';
import ProfileLink from './profile-link/ProfileLink';
import Navigation from './navigation/Navigation';

function Header() {
  return (
    <header className='header page__margin-auto'>
      <Link to='/main' className='header__link-logo' >
        <img src={ logo } alt='Логотип' className='header__logo' />
      </Link>
      {/* <AuthLink /> */}
      <Navigation />
      <ProfileLink />
    </header>
  );
}

export default Header;
