import React, { useState } from 'react';
import './filterCheckbox.css';

function FilterCheckbox() {
  const [ checkFilter, setCheckFilter ] = useState(false);

  const containerFilterClass = checkFilter ?
  'search__container-filter search__container-filter_active' :
  'search__container-filter';
  const switchFilterClass = checkFilter ?
  'search__switch-filter search__switch-filter_active' :
  'search__switch-filter';

  // Сделать с помощью js легче. Уже делал с помощью css
  function changeFilter() {
    setCheckFilter(!checkFilter);
  };

  // checkbox довольно маленький чтобы попасть.
  // Меня это довольно раздражает, поэтому кликаю на запись
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
