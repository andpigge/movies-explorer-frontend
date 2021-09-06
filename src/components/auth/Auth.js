import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

// Компоненты
import Logo from '../logo/Logo';

function Auth({ registerProps, children }) {

  const {
    title,
    textAuth,
    textLink,
    link,
  } = registerProps;

  return (
    <section className='auth'>
      <Logo />
      <h1 className='auth__title'>
        { title }
      </h1>
      { children }
      <div className='auth__content'>
        <p className='auth__text'>
          { textAuth }
        </p>
        <Link to={ link } >
          { textLink }
        </Link>
      </div>
    </section>
  );
}

export default Auth;
