import React from 'react';
import { Link } from 'react-router-dom';
import './profileLink.css';

function ProfileLink({ activeMenu }) {
  const headerProfileLink = activeMenu ?
  'header__profile-link header__profile-link_position_mobule-menu' :
  'header__profile-link';

  return (
    <Link to='/profile' className={ headerProfileLink } >
      Аккаунт
      <span className='header__profile-link-icon'></span>
    </Link>
  );
}

export default ProfileLink;
