import React, { useState } from 'react';
import './inputAuth.css';

function InputAuth(
  {
    textDesc,
    nameField,
    typeField,
    validateValue,
    isValidField,
    setIsValidField,
    authValue,
    setAuthValue,
  })
{
  // Валидация
  const [ validInfo, setValidInfo ] = useState({});

  const handleChange = e => {
    const value = e.target.value;
    const objectMessage = validateValue(value);
    setIsValidField(objectMessage.isValidated);
    setValidInfo(objectMessage);

    setAuthValue(value);
  };

  // Можно было бы анимацию сделать с помощью ref, но так понятнее
  const [ activeInput, setActiveInput ] = useState(false);

  const addActiveInput = e => {
    setActiveInput(true);
    e.target.className = 'auth__field-text';
  };

  const removeActiveInput = e => {
    const item = e.target;
    const value = item.value;
    // При потере фокуса, подсвечиваю input, если есть ошибка.
    // А то пользователь понял что есть ошибка, и исправит
    if (validateValue(value).isValidated === false) {
      item.classList.add('auth__field-text_type_error');
    }
    if (value) {
      return setActiveInput(true);
    }
    setActiveInput(false);
  };

  const labelClass = activeInput ?
  'auth__desc auth__desc_active' :
  'auth__desc';

  const fieldTextClass = isValidField ?
  'auth__field-text' :
  'auth__field-text auth__field-text_type_error';
  const messageClass = isValidField ?
  'auth__message' :
  'auth__message auth__message_type_error';

  return (
    <>
      <label className='auth__label'>
        <p className={ labelClass }>
          { textDesc }
        </p>
        <input
          type={ typeField }
          className={ fieldTextClass }
          name={ nameField }
          value={ authValue }
          onChange={ handleChange }
          onFocus={ addActiveInput }
          onBlur={ removeActiveInput }
          required
        />
        <span className='auth__line'></span>
        <p className={ messageClass }>
          { isValidField ? validInfo.message : validInfo.error }
        </p>
      </label>
    </>
  );
}

export default InputAuth;
