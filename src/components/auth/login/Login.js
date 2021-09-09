import React, { useState, useEffect } from 'react';
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
  // Поднял State
  const [ isValidFieldEmail, setIsValidFieldEmail ] = useState(null);
  const [ isValidFieldPassword, setIsValidFieldPassword ] = useState(null);

  // Валидны ли все поля
  const [ isValidFieldLogin, setIsValidFieldLogin ] = useState(false);
  useEffect(() => {
    if (isValidFieldEmail && isValidFieldPassword) {
      return setIsValidFieldLogin(true);
    }
    setIsValidFieldLogin(false);
  }, [ isValidFieldEmail, isValidFieldPassword ]);

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
            isValidField={ isValidFieldEmail }
            setIsValidField={ setIsValidFieldEmail }
          />
          <InputAuth
            textDesc={ 'Пароль' }
            nameField={ 'loginPassword' }
            typeField={ 'password' }
            validateValue={ handleValidatePassword }
            isValidField={ isValidFieldPassword }
            setIsValidField={ setIsValidFieldPassword }
          />
          <ButtonAuth buttonText={ 'Войти' } isValidFieldLogin={ isValidFieldLogin } />
        </form>
      </Auth>
    </main>
  );
}

export default Login;

