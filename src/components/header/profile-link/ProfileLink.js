import React from 'react';
import { Link } from 'react-router-dom';
import './profileLink.css';

function ProfileLink() {
  return (
    <Link to='/' className='header__profile-link' >
      Аккаунт
      <span className='header__profile-link-icon'></span>
    </Link>
  );
}

export default ProfileLink;
