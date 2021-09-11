import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

// Api
import { signInApi } from '../../../utils/api/auth';

function Login({ setLoggedIn }) {
  // Меняет название кнопки при запросе к БД
  const [isLoadig, setIsLoading] = useState(false);
  const history = useHistory();

  const [ authValueEmail, setAuthValueEmail ] = useState('');
  const [ authValuePassword, setAuthValuePassword ] = useState('');

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

  const requestLogin = () => {
    setIsLoading(true);
    signInApi({
      email: authValueEmail,
      password: authValuePassword,
    })
    .then(res => {
      localStorage.setItem('jwt', res.token);
      // Меняю статус пользователя
      setLoggedIn(true);

      setAuthValueEmail('');
      setAuthValuePassword('');
      history.push(`/movies`);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });
  }

  const submitForm = e => {
    e.preventDefault();
    requestLogin();
  };

  return (
    <main className='login login__margin-center'>
      <Auth authProps={ loginProps } >
        <form
          className='auth__form login__form'
          name='login'
          onSubmit={ submitForm }
        >
          <InputAuth
            textDesc={ 'E-mail' }
            nameField={ 'loginEmail' }
            typeField={ 'email' }
            validateValue={ handleValidateEmail }
            isValidField={ isValidFieldEmail }
            setIsValidField={ setIsValidFieldEmail }
            authValue={ authValueEmail }
            setAuthValue={ setAuthValueEmail }
          />
          <InputAuth
            textDesc={ 'Пароль' }
            nameField={ 'loginPassword' }
            typeField={ 'password' }
            validateValue={ handleValidatePassword }
            isValidField={ isValidFieldPassword }
            setIsValidField={ setIsValidFieldPassword }
            authValue={ authValuePassword }
            setAuthValue={ setAuthValuePassword }
          />
          <ButtonAuth
            buttonText={ 'Войти' }
            isValidFieldLogin={ isValidFieldLogin }
            isLoadig={ isLoadig }
          />
        </form>
      </Auth>
    </main>
  );
}

export default Login;
