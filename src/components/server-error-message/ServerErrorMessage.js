import React from 'react';
import './serverErrorMessage.css';

function ServerErrorMessage() {
  return (
    <section className='server-error-message'>
      <p className='server-error-message__text'>
        При обновлении профиля произошла ошибка.
      </p>
    </section>
  );
}

export default ServerErrorMessage;
