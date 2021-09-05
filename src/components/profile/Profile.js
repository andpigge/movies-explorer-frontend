import React from 'react';
import './profile.css';

// Компоненты
import Header from '../header/Header';
import InputProfile from './input-profile/InputProfile';
import ButtonProfile from './button-profile/ButtonProfile';
import LinkProfile from './link-profile/LinkProfile';

function Profile() {
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
              <InputProfile name={ 'nameInput' } text={ 'Имя' } />
              <InputProfile name={ 'emailInput' } text={ 'E-mail' } />
              <ButtonProfile />
            </form>
            <LinkProfile />
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;

