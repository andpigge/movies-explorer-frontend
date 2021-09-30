import React from 'react';
import './buttonAuth.css';

function ButtonAuth(
  {
    buttonText,
    isValidFieldRegister,
    isValidFieldLogin,
    isLoadig,
  })
{
  const authSubmit = isValidFieldRegister || isValidFieldLogin ?
  'auth__submit' :
  'auth__submit auth__submit_disabled';

  return (
    <button
      type='submit'
      className={ authSubmit }
      disabled={ !isValidFieldRegister && !isValidFieldLogin }
    >
      { isLoadig ? `${buttonText}...` : buttonText }
    </button>
  );
}

export default ButtonAuth;
