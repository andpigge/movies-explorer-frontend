import React from 'react';
import './buttonProfile.css';

function ButtonProfile({ isValidFieldAll }) {
  const profileSubmit = isValidFieldAll ?
  'user-profile__submit' :
  'user-profile__submit user-profile__submit_disabled';

  return (
    <button
      type='submit'
      className={ profileSubmit }
      disabled={ !isValidFieldAll }
    >
      Редактировать
    </button>
  );
}

export default ButtonProfile;
