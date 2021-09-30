import React from 'react';
import { useHistory } from 'react-router-dom';
import './linkProfile.css';

function LinkProfile({ setLoggedIn }) {
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('movies');
    localStorage.removeItem('userInfo');
    history.push(`/`);
    setLoggedIn(false);
  }

  return (
    <button className='user-profile__link' onClick={ signOut }>
      Выйти из аккаунта
    </button>
  );
}

export default LinkProfile;
