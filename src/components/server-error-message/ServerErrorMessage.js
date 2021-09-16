import React from 'react';
import './serverErrorMessage.css';

function ServerErrorMessage({ message }) {
  return (
    <section className='server-error-message'>
      <p className='server-error-message__text'>
        { message }
      </p>
    </section>
  );
}

export default ServerErrorMessage;
