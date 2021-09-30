import React from 'react';
import './filterCheckbox.css';

function FilterCheckbox({ setCheckFilter, checkFilter }) {
  const containerFilterClass = checkFilter ?
  'search__container-filter search__container-filter_active' :
  'search__container-filter';
  const switchFilterClass = checkFilter ?
  'search__switch-filter search__switch-filter_active' :
  'search__switch-filter';

  function changeFilter() {
    setCheckFilter(!checkFilter);
  };

  function changeFilterTitle() {
    setCheckFilter(!checkFilter);
  };

  return (
    <>
      <div className={ containerFilterClass } onClick={ changeFilter }>
        <span className={ switchFilterClass }></span>
      </div>
      <h4 className='search__title' onClick={ changeFilterTitle }>
        Короткометражки
      </h4>
    </>
  );
}

export default FilterCheckbox;
