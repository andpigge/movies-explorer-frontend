import React from 'react';
import './searchForm.css';

// Компоненты
import InputSearch from './input-search/InputSearch';
import ButtonSearch from './button-search/ButtonSearch';
import FilterCheckbox from './filter-checkbox/FilterCheckbox';

// Пользовательские хуки. HOC не подойдет
import useSearchMobule from '../../utils/custom-hooks/useSearchMobule';

function SearchForm() {
  const isMobuleSearch = useSearchMobule(601);

  // По умолчанию state равен null, в случае если мобильный экран true или false,
  // только тогда вырисовываем компоненты. Иначе будет дергающий экран.
  const setMenuDisplay = () => {
    if (isMobuleSearch === false) {
      return (
        <div className='search__container'>
          <InputSearch />
          
          <ButtonSearch />
          <span className='search__form-line'></span>
          <FilterCheckbox />
        </div>
      );
    }
    if (isMobuleSearch === true) {
      return (
        <>
          <div className='search__container'>
            <InputSearch />
            <ButtonSearch />
          </div>
          <FilterCheckbox />
        </>
      );
    }
  };

  return (
    <section className='search movies_margin_center'>
      <form className='search__form' name='search'>
        {
          setMenuDisplay()
        }
      </form>
      <span className='search__line'></span>
    </section>
  );
}

export default SearchForm;
