import React from 'react';
import './login.css';

// Компоненты
import Auth from '../Auth';
import InputAuth from '../input-auth/InputAuth';
import ButtonAuth from '../button-auth/ButtonAuth';

// constants
import { loginProps } from '../../../utils/constants';

// utils
import validateEmail from '../../../utils/validate/validateEmail';
import validatePassword from '../../../utils/validate/validatePassword';

function Login() {
  const handleValidateEmail = email => {
    return validateEmail({ email: email});
  };

  const handleValidatePassword = password => {
    return validatePassword({ password: password});
  };

  return (
    <main className='login login__margin-center'>
      <Auth authProps={ loginProps } >
        <form className='auth__form login__form' name='login'>
          <InputAuth
            textDesc={ 'E-mail' }
            nameField={ 'loginEmail' }
            typeField={ 'email' }
            validateValue={ handleValidateEmail }
          />
          <InputAuth
            textDesc={ 'Пароль' }
            nameField={ 'loginPassword' }
            typeField={ 'password' }
            validateValue={ handleValidatePassword }
          />
          <ButtonAuth buttonText={ 'Войти' } />
        </form>
      </Auth>
    </main>
  );
}

export default Login;

