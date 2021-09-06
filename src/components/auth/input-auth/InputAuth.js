import React, { useState } from 'react';
import './inputAuth.css';

function InputAuth({ textDesc, nameField, typeField }) {
  const [ authValue, setAuthValue ] = useState('');

  const handleChange = e => {
    setAuthValue(e.target.value);
  };

  // Можно было бы анимацию сделать с помощью ref, но так понятнее
  const [ activeInput, setActiveInput ] = useState(false);

  const addActiveInput = () => {
    setActiveInput(true);
  };

  const removeActiveInput = e => {
    if (e.target.value) {
      return setActiveInput(true);
    }
    setActiveInput(false);
  };

  const labelClass = activeInput ?
  'auth__desc auth__desc_active' :
  'auth__desc';

  return (
    <>
      <label className='auth__label'>
        <p className={ labelClass }>
          { textDesc }
        </p>
        <input
          type={ typeField }
          className='auth__field-text'
          name={ nameField }
          value={ authValue }
          onChange={ handleChange }
          onFocus={ addActiveInput }
          onBlur={ removeActiveInput }
          required
        />
        <span className='auth__line'></span>
      </label>
    </>
  );
}

export default InputAuth;
