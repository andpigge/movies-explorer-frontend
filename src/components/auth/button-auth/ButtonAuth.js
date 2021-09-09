import React from 'react';
import './buttonAuth.css';

function ButtonAuth({ buttonText, isValidFieldRegister, isValidFieldLogin }) {
  const authSubmit = isValidFieldRegister || isValidFieldLogin ?
  'auth__submit' :
  'auth__submit auth__submit_disabled';

  return (
    <button
      type='submit'
      className={ authSubmit }
      disabled={ !isValidFieldRegister || !isValidFieldLogin }
    >
      { buttonText }
    </button>
  );
}

export default ButtonAuth;
