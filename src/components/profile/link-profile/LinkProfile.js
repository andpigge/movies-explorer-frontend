import React from 'react';
import { useHistory } from 'react-router-dom';
import './linkProfile.css';

function LinkProfile({ setLoggedIn }) {
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem('jwt');
    history.push(`/signin`);
    setLoggedIn(false);
  }

  return (
    <button className='user-profile__link' onClick={ signOut }>
      Выйти из аккаунта
    </button>
  );
}

export default LinkProfile;
