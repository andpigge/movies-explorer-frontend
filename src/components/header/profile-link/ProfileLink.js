import React from 'react';
import { Link } from 'react-router-dom';
import './profileLink.css';

function ProfileLink({ modifierProfileLink = false }) {
  const { profileLink } = modifierProfileLink;

  const headerProfileLink = profileLink ?
  `header__profile-link ${profileLink}` :
  'header__profile-link';

  return (
    <Link to='/' className={ headerProfileLink } >
      Аккаунт
      <span className='header__profile-link-icon'></span>
    </Link>
  );
}

export default ProfileLink;
