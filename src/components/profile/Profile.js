import React, { useEffect, useState } from 'react';
import './profile.css';

// Компоненты
import Header from '../header/Header';
import InputProfile from './input-profile/InputProfile';
import ButtonProfile from './button-profile/ButtonProfile';
import LinkProfile from './link-profile/LinkProfile';
import ServerErrorMessage from '../server-error-message/ServerErrorMessage';

// utils
import validateName from '../../utils/validate/validateName';
import validateEmail from '../../utils/validate/validateEmail';

// API
import MainApi from '../../utils/api/MainApi';

function Profile({ userInfo, addUserInfo, setLoggedIn, loggedIn }) {
  const {
    name,
    email,
   } = userInfo;

   // Сообщение об ошибке для отображения
  const [ messageError, setMessageError ] = useState('');

  const [ profileValueName, setProfileValueName ] = useState('');
  const [ profileValueEmail, setProfileValueEmail ] = useState('');
  useEffect(() => {
    setProfileValueName(name);
    setProfileValueEmail(email);
  }, [ name, email, loggedIn ]);

  // Поднял State
  const [ isValidFieldName, setIsValidFieldName ] = useState(true);
  const [ isValidFieldEmail, setIsValidFieldEmail ] = useState(true);

  // Валидны ли все поля
  const [ isValidFieldAll, setIsValidFieldAll ] = useState(false);

  useEffect(() => {
    if (name === profileValueName && email === profileValueEmail) {
      return setIsValidFieldAll(false);
    }
    if (isValidFieldName && isValidFieldEmail) {
      return setIsValidFieldAll(true);
    }
    setIsValidFieldAll(false);
  }, [ isValidFieldName, isValidFieldEmail, profileValueName, profileValueEmail, email, name ]);

  const handleValidateName = name => {
    return validateName({ string: name, minLength: 1, maxLength: 30 });
  };

  const handleValidateEmail = email => {
    return validateEmail({ email: email});
  };

  const checkMessageError = errCode => {
    if (errCode === 409) {
      setMessageError('Пользователь с таким email уже существует.');
      return;
    }
    if (errCode === 200) {
      setMessageError('Успешно.');
      return;
    }
    setMessageError('При регистрации пользователя произошла ошибка.');
  };

  // Запрос к БД
  const requestProfile = () => {
    MainApi.updateUserInfo({
      email: profileValueEmail,
      name: profileValueName,
    })
      .then(res => {
        localStorage.setItem('userInfo', JSON.stringify(res));
        addUserInfo(res);
        checkMessageError(200);
      })
      .catch(err => {
        const errCode = parseInt(err.split(' ')[1]);
        checkMessageError(errCode);
        console.log(err)
      });
  };

  const submitForm = e => {
    e.preventDefault();
    requestProfile();
  };

  return (
    <>
      <Header />
      <main className='profile'>
        <section className='user-profile profile_margin_center'>
          <div className='user-profile__container'>
            <h1 className='user-profile__title'>
              {
                `Привет, ${ name ? name : 'Пользователь' }!`
              }
            </h1>
            <form
              className='user-profile__form'
              name='profile'
              onSubmit={ submitForm }
            >
              <InputProfile
                name={ 'nameInput' }
                text={ 'Имя' }
                validateValue={ handleValidateName }
                isValidField={ isValidFieldName }
                setIsValidField={ setIsValidFieldName }
                setProfileValue={ setProfileValueName }
                profileValue={ profileValueName }
              />
              <InputProfile
                name={ 'emailInput' }
                text={ 'E-mail' }
                validateValue={ handleValidateEmail }
                isValidField={ isValidFieldEmail }
                setIsValidField={ setIsValidFieldEmail }
                setProfileValue={ setProfileValueEmail }
                profileValue={ profileValueEmail }
              />
              <ServerErrorMessage message={ messageError } />
              <ButtonProfile isValidFieldAll={ isValidFieldAll } />
            </form>
            <LinkProfile setLoggedIn={ setLoggedIn } />
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
