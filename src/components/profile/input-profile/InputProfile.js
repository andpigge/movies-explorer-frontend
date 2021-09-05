import React from 'react';
import './inputProfile.css';

function InputProfile({ name, text }) {
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
        />
      </label>
      <span className='user-profile__line'></span>
    </>
  );
}

export default InputProfile;
