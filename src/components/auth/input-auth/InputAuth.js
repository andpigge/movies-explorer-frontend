import React, { useState } from 'react';
import './inputAuth.css';

function InputAuth() {
  const [ activeInput, setActiveInput ] = useState();

  const addActiveInput = () => {
    console.log(1)
  };

  const removeActiveInput = () => {
    console.log(2)
  };

  return (
    <input type='text' onFocus={ addActiveInput } onBlur={ removeActiveInput } />
  );
}

export default InputAuth;
