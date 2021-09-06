import React from 'react';
import './buttonAuth.css';

function ButtonAuth({ buttonText }) {
  return (
    <button type='submit' className='auth__submit'>
      { buttonText }
    </button>
  );
}

export default ButtonAuth;
