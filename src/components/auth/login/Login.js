import React from 'react';
import './login.css';

// Компоненты
import Auth from '../Auth';
import InputAuth from '../input-auth/InputAuth';
import ButtonAuth from '../button-auth/ButtonAuth';

function Login() {

  const registerProps = {
    title: 'Рады видеть!',
    textAuth: 'Ещё не зарегистрированы?',
    textLink: 'Регистрация',
    link: '/signup',
  };

  return (
    <main className='login login__margin-center'>
      <Auth registerProps={ registerProps } >
        <form className='auth__form login__form' name='login'>
          <InputAuth textDesc={ 'E-mail' } nameField={ 'loginEmail' } typeField={ 'email' } />
          <InputAuth textDesc={ 'Пароль' } nameField={ 'loginPassword' } typeField={ 'password' } />
          <ButtonAuth buttonText={ 'Войти' } />
        </form>
      </Auth>
    </main>
  );
}

export default Login;

