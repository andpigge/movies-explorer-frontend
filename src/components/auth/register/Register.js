import React from 'react';
import './register.css';

// Компоненты
import Auth from '../Auth';
import InputAuth from '../input-auth/InputAuth';
import ButtonAuth from '../button-auth/ButtonAuth';

function Register() {

  const registerProps = {
    title: 'Добро пожаловать!',
    textAuth: 'Уже зарегистрированы?',
    textLink: 'Войти',
    link: '/signin',
  };

  return (
    <main className='register register__margin-center'>
      <form>
        <Auth registerProps={ registerProps } >
          <InputAuth />
          <InputAuth />
          <InputAuth />
          <ButtonAuth />
        </Auth>
      </form>
    </main>
  );
}

export default Register;
