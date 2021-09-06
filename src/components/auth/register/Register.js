import React from 'react';
import './register.css';

// Компоненты
import Auth from '../Auth';
import InputAuth from '../input-auth/InputAuth';
import ButtonAuth from '../button-auth/ButtonAuth';

// constants
import { registerProps } from '../../../utils/constants';

// utils
import validateString from '../../../utils/validate/validateString';
import validateEmail from '../../../utils/validate/validateEmail';
import validatePassword from '../../../utils/validate/validatePassword';

function Register() {
  const handleValidateName = name => {
    return validateString({ string: name, minLength: 1, maxLength: 30 });
  };

  const handleValidateEmail = email => {
    return validateEmail({ email: email});
  };

  const handleValidatePassword = password => {
    return validatePassword({ password: password});
  };

  return (
    <main className='register register__margin-center'>
      <Auth registerProps={ registerProps } >
        <form className='auth__form register__form' name='register'>
          <InputAuth
            textDesc={ 'Имя' }
            nameField={ 'registerName' }
            typeField={ 'text' }
            validateValue={ handleValidateName }
          />
          <InputAuth
            textDesc={ 'E-mail' }
            nameField={ 'registerEmail' }
            typeField={ 'email' }
            validateValue={ handleValidateEmail }
          />
          <InputAuth
            textDesc={ 'Пароль' }
            nameField={ 'registerPassword' }
            typeField={ 'password' }
            validateValue={ handleValidatePassword }
          />
          <ButtonAuth buttonText={ 'Зарегистрироваться' } />
        </form>
      </Auth>
    </main>
  );
}

export default Register;
