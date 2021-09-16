import React, { useState } from 'react';
import './searchForm.css';

// Компоненты
import InputSearch from './input-search/InputSearch';
import ButtonSearch from './button-search/ButtonSearch';
import FilterCheckbox from './filter-checkbox/FilterCheckbox';

// Пользовательские хуки. HOC не подойдет
import useSearchMobule from '../../utils/custom-hooks/useSearchMobule';
import searchMovies from '../../utils/searchMovies';

function SearchForm({ setResultSearch, setIsActiveButton, setCheckFilter, checkFilter, search }) {
  const [ searchValueMovies, setSearchValueMovies ] = useState('');

  const isMobuleSearch = useSearchMobule(601);

  const setMenuDisplay = () => {
    if (isMobuleSearch === false) {
      return (
        <div className='search__container'>
          <InputSearch
            setSearchValue={ setSearchValueMovies }
            searchValue={ searchValueMovies }
          />
          <ButtonSearch />
          <span className='search__form-line'></span>
          <FilterCheckbox
            setCheckFilter={ setCheckFilter }
            checkFilter={ checkFilter }
          />
        </div>
      );
    }
    if (isMobuleSearch === true) {
      return (
        <>
          <div className='search__container'>
            <InputSearch
              setSearchValue={ setSearchValueMovies }
              searchValue={ searchValueMovies }
            />
            <ButtonSearch />
          </div>
          <FilterCheckbox
            setCheckFilter={ setCheckFilter }
            checkFilter={ checkFilter }
          />
        </>
      );
    }
  };

  const searchMoviesClick = e => {
    e.preventDefault();
    const result = searchMovies(search, searchValueMovies, checkFilter);
    setResultSearch(result);

    // При новом поиске, кнопку 'еще' делаю активной.
    if (setIsActiveButton) {
      setIsActiveButton(true);
    }
  };

  return (
    <section className='search movies_margin_center'>
      <form className='search__form' name='search' onSubmit={ searchMoviesClick }>
        {
          setMenuDisplay()
        }
      </form>
      <span className='search__line'></span>
    </section>
  );
}

export default SearchForm;
