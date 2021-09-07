import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

// Компоненты
import Logo from '../logo/Logo';

function Auth({ authProps, children }) {

  const {
    title,
    textAuth,
    textLink,
    link,
  } = authProps;

  return (
    <section className='auth auth_margin_center'>
      <div className='auth__container'>
        <Logo />
        <h1 className='auth__title'>
          { title }
        </h1>
        { children }
        <div className='auth__content'>
          <p className='auth__text'>
            { textAuth }
          </p>
          <Link to={ link } className='auth__link' >
            { textLink }
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Auth;
