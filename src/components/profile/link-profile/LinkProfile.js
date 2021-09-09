import React from 'react';
import { Link } from 'react-router-dom';
import './linkProfile.css';

function LinkProfile() {
  return (
    <Link to='/signin' className='user-profile__link'>
      Выйти из аккаунта
    </Link>
  );
}

export default LinkProfile;
