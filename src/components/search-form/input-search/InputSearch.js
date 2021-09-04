import React, { useState } from 'react';
import './inputSearch.css';

function InputSearch() {
  const [ searchValue, setSearchValue ] = useState('');

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Фильм'
      name='searchInput'
      required
      className='search__field-text'
      onChange={ handleChange }
      value={ searchValue }
    />
  );
}

export default InputSearch;
