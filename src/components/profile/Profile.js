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

function Profile({ userInfo, setUserInfo }) {
  // Поднял State
  const [ isValidFieldName, setIsValidFieldName ] = useState(null);
  const [ isValidFieldEmail, setIsValidFieldEmail ] = useState(null);

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

  // Запрос к бд
  useEffect(() => {
    if (userInfo === false) {
      return;
    }
    // Запрос
    // setUserInfo();
  });

  return (
    <>
      <Header />
      <main className='profile'>
        <section className='user-profile profile_margin_center'>
          <div className='user-profile__container'>
            <h1 className='user-profile__title'>
              Привет, Виталий!
            </h1>
            <form className='user-profile__form' name='profile'>
              <InputProfile
                name={ 'nameInput' }
                text={ 'Имя' }
                validateValue={ handleValidateName }
                isValidField={ isValidFieldName }
                setIsValidField={ setIsValidFieldName }
              />
              <InputProfile
                name={ 'emailInput' }
                text={ 'E-mail' }
                validateValue={ handleValidateEmail }
                isValidField={ isValidFieldEmail }
                setIsValidField={ setIsValidFieldEmail }
              />
              <ButtonProfile isValidFieldAll={ isValidFieldAll } />
            </form>
            <LinkProfile />
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
