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
      <Auth registerProps={ registerProps } >
        <form className='auth__form register__form' name='register'>
          <InputAuth textDesc={ 'Имя' } nameField={ 'registerName' } typeField={ 'text' } />
          <InputAuth textDesc={ 'E-mail' } nameField={ 'registerEmail' } typeField={ 'email' } />
          <InputAuth textDesc={ 'Пароль' } nameField={ 'registerPassword' } typeField={ 'password' } />
          <ButtonAuth buttonText={ 'Зарегистрироваться' } />
        </form>
      </Auth>
    </main>
  );
}

export default Register;
