import React, { useState, useRef } from 'react';
import './inputProfile.css';

function InputProfile(
  {
    name,
    text,
    validateValue,
    setIsValidField,
    isValidField,
    setProfileValue,
    profileValue,
  })
{
  const messageRef = useRef();

  // Валидация
  const [ validInfo, setValidInfo ] = useState({});

  const handleChange = e => {
    const item = e.target;
    const value = item.value;
    const objectMessage = validateValue(value);
    setIsValidField(objectMessage.isValidated);
    setValidInfo(objectMessage);

    setProfileValue(e.target.value);
  };

  const removeActiveInput = e => {
    const item = e.target;
    const value = item.value;
    if (validateValue(value).isValidated === false) {
      // При потере фокуса текст становится красным в input
      item.classList.add('auth__field-text_type_error');

      setTimeout(() => {
        messageRef.current.textContent = '';
      }, 200);
      messageRef.current.style.opacity = '0';
    }
  };

  const addActiveInput = e => {
    const item = e.target;
    // При фокусе текст перестает быть красным.
    // Пользователь уже понял что ошибка и исправляет. Поэтому красный в поле не надо
    item.className = 'user-profile__field-text';

    // Пользователь уже понимает где ошибся, ведь это его email и имя.
    // Поэтому всегда показывать ошибку лишнее. При заполнении достаточно.
    messageRef.current.textContent = validInfo.error;
    messageRef.current.style.opacity = '1';
  };

  const fieldTextClass = isValidField ?
  'user-profile__field-text' :
  'user-profile__field-text user-profile__field-text_type_error';
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
          className={ fieldTextClass }
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
