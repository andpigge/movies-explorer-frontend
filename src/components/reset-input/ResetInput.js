import React from 'react';
import './resetInput.css';

function ResetInput({ item }) {
  const resetText = () => {
    item.value = '';
  };

  return (
    <button type='button' className='reset-input' onClick={ resetText }></button>
  );
}

export default ResetInput;
