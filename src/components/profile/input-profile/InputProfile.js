import React, { useState } from 'react';
import './inputProfile.css';

function InputProfile({ name, text }) {
  const [ profileValue, setProfileValue ] = useState('');

  const handleChange = e => {
    setProfileValue(e.target.value);
  };

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
          onChange={ handleChange }
        />
      </label>
      <span className='user-profile__line'></span>
    </>
  );
}

export default InputProfile;
