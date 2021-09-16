import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './register.css';

// Компоненты
import Auth from '../Auth';
import InputAuth from '../input-auth/InputAuth';
import ButtonAuth from '../button-auth/ButtonAuth';
import ServerErrorMessage from '../../server-error-message/ServerErrorMessage';

// constants
import { registerProps } from '../../../utils/constants';

// utils
import validateName from '../../../utils/validate/validateName';
import validateEmail from '../../../utils/validate/validateEmail';
import validatePassword from '../../../utils/validate/validatePassword';

// Api
import { registerApi } from '../../../utils/api/auth';

function Register() {
  // Меняет название кнопки при запросе к БД
  const [isLoadig, setIsLoading] = useState(false);
  const history = useHistory();
  // Сообщение об ошибке для отображения
  const [ messageError, setMessageError ] = useState('');

  // Значение полей
  const [ authValueName, setAuthValueName ] = useState('');
  const [ authValueEmail, setAuthValueEmail ] = useState('');
  const [ authValuePassword, setAuthValuePassword ] = useState('');

  // Поднял State
  const [ isValidFieldName, setIsValidFieldName ] = useState(null);
  const [ isValidFieldEmail, setIsValidFieldEmail ] = useState(null);
  const [ isValidFieldPassword, setIsValidFieldPassword ] = useState(null);

  // Валидны ли все поля
  const [ isValidFieldRegister, setIsValidFieldRegister ] = useState(false);
  useEffect(() => {
    if (isValidFieldName && isValidFieldEmail && isValidFieldPassword) {
      return setIsValidFieldRegister(true);
    }
    setIsValidFieldRegister(false);
  }, [ isValidFieldName, isValidFieldEmail, isValidFieldPassword ]);

  const handleValidateName = name => {
    return validateName({ string: name, minLength: 1, maxLength: 30 });
  };

  const handleValidateEmail = email => {
    return validateEmail({ email: email});
  };

  const handleValidatePassword = password => {
    return validatePassword({ password: password});
  };

  const checkMessageError = errCode => {
    if (errCode === 409) {
      setMessageError('Пользователь с таким email уже существует.');
      return;
    }
    setMessageError('При регистрации пользователя произошла ошибка.');
  };

  // Запрос к серверу
  const requestRegister = () => {
    setIsLoading(true);
    registerApi({
      name: authValueName,
      email: authValueEmail,
      password: authValuePassword,
    })
    .then(res => {
      setAuthValueName('');
      setAuthValueEmail('');
      setAuthValuePassword('');
      history.push(`/signin`);
    })
    .catch(err => {
      const errCode = parseInt(err.split(' ')[1]);
      checkMessageError(errCode);
      console.log(err);
      setIsLoading(false);
    });
  };

  const submitForm = e => {
    e.preventDefault();
    requestRegister();
  };

  return (
    <main className='register register__margin-center'>
      <Auth authProps={ registerProps } >
        <form
          className='auth__form register__form'
          name='register'
          onSubmit={ submitForm }
        >
          <InputAuth
            textDesc={ 'Имя' }
            nameField={ 'registerName' }
            typeField={ 'text' }
            validateValue={ handleValidateName }
            isValidField={ isValidFieldName }
            setIsValidField={ setIsValidFieldName }
            authValue={ authValueName }
            setAuthValue={ setAuthValueName }
          />
          <InputAuth
            textDesc={ 'E-mail' }
            nameField={ 'registerEmail' }
            typeField={ 'email' }
            validateValue={ handleValidateEmail }
            isValidField={ isValidFieldEmail }
            setIsValidField={ setIsValidFieldEmail }
            authValue={ authValueEmail }
            setAuthValue={ setAuthValueEmail }
          />
          <InputAuth
            textDesc={ 'Пароль' }
            nameField={ 'registerPassword' }
            typeField={ 'password' }
            validateValue={ handleValidatePassword }
            isValidField={ isValidFieldPassword }
            setIsValidField={ setIsValidFieldPassword }
            authValue={ authValuePassword }
            setAuthValue={ setAuthValuePassword }
          />
          <ServerErrorMessage message={ messageError } />
          <ButtonAuth
            buttonText={ 'Зарегистрироваться' }
            isValidFieldRegister={ isValidFieldRegister }
            isLoadig={ isLoadig }
          />
        </form>
      </Auth>
    </main>
  );
}

export default Register;
