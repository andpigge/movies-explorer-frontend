import React, { useState, useRef } from 'react';
import './inputProfile.css';

function InputProfile({ name, text, validateValue }) {
  const messageRef = useRef();

  // Валидация
  const [ isValidField, setIsValidField ] = useState(null);
  const [ validInfo, setValidInfo ] = useState({});

  const [ profileValue, setProfileValue ] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    const objectMessage = validateValue(value);
    setIsValidField(objectMessage.isValidated);
    setValidInfo(objectMessage);

    setProfileValue(e.target.value);
  };

  const removeActiveInput = e => {
    const item = e.target;
    const value = item.value;
    if (validateValue(value).isValidated === false) {
      setTimeout(() => {
        messageRef.current.textContent = '';
      }, 200);
      messageRef.current.style.opacity = '0';
    }
  };

  const addActiveInput = e => {
    messageRef.current.textContent = validInfo.error;
    messageRef.current.style.opacity = '1';
  };

  const messageClass = isValidField ?
  'user-profile__message' :
  'user-profile__message user-profile__message_type_error';

  return (
    <>
      <label className='user-profile__label'>
        { text }
        <input
          type='text'
          required
          name={ name }
          placeholder={ text }
          className='user-profile__field-text'
          value={ profileValue }
          onFocus={ addActiveInput }
          onBlur={ removeActiveInput }
          onChange={ handleChange }
        />
        <p className={ messageClass } ref={ messageRef }>
          { isValidField ? validInfo.message : validInfo.error }
        </p>
      </label>
      <span className='user-profile__line'></span>
    </>
  );
}

export default InputProfile;
