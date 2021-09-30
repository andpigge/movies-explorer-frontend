import React from 'react';
import './inputSearch.css';

function InputSearch({ setSearchValue, searchValue }) {
  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Фильм'
      name='searchInput'
      className='search__field-text'
      onChange={ handleChange }
      value={ searchValue }
    />
  );
}

export default InputSearch;
