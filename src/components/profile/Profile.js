import React, { useEffect, useState } from 'react';
import './profile.css';

// Компоненты
import Header from '../header/Header';
import InputProfile from './input-profile/InputProfile';
import ButtonProfile from './button-profile/ButtonProfile';
import LinkProfile from './link-profile/LinkProfile';

// utils
import validateString from '../../utils/validate/validateString';
import validateEmail from '../../utils/validate/validateEmail';

// API
import MainApi from '../../utils/api/MainApi';

function Profile({ userInfo, addUserInfo, setLoggedIn }) {
  const {
    name,
    email,
   } = userInfo;

  // Поднял State
  const [ isValidFieldName, setIsValidFieldName ] = useState(true);
  const [ isValidFieldEmail, setIsValidFieldEmail ] = useState(true);

  // Валидны ли все поля
  const [ isValidFieldAll, setIsValidFieldAll ] = useState(false);
  useEffect(() => {
    if (isValidFieldName && isValidFieldEmail) {
      return setIsValidFieldAll(true);
    }
    setIsValidFieldAll(false);
  }, [ isValidFieldName, isValidFieldEmail ]);

  const handleValidateName = name => {
    return validateString({ string: name, minLength: 1, maxLength: 30 });
  };

  const handleValidateEmail = email => {
    return validateEmail({ email: email});
  };

  const requestProfile = () => {
    MainApi.updateUserInfo({
      email: isValidFieldEmail,
      name: isValidFieldName,
    })
      .then(res => addUserInfo(res))
      .catch(err => console.log(err));
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
                defaultValue={ name }
              />
              <InputProfile
                name={ 'emailInput' }
                text={ 'E-mail' }
                validateValue={ handleValidateEmail }
                isValidField={ isValidFieldEmail }
                setIsValidField={ setIsValidFieldEmail }
                defaultValue={ email }
              />
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
