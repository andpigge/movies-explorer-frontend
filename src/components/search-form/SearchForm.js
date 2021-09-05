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

  return (
    <section className='search movies_margin_center'>
      <form className='search__form' name='search'>
        {
          isMobuleSearch ?
          <>
            <div className='search__container'>
              <InputSearch />
              <ButtonSearch />
            </div>
            <FilterCheckbox />
          </> :
          <div className='search__container'>
            <InputSearch />
            <ButtonSearch />
            <span className='search__form-line'></span>
            <FilterCheckbox />
        </div>
        }
      </form>
      <span className='search__line'></span>
    </section>
  );
}

export default SearchForm;
