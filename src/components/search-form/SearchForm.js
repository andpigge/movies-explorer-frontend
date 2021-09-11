import React, { useContext, useState } from 'react';
import './searchForm.css';

// Компоненты
import InputSearch from './input-search/InputSearch';
import ButtonSearch from './button-search/ButtonSearch';
import FilterCheckbox from './filter-checkbox/FilterCheckbox';

// Пользовательские хуки. HOC не подойдет
import useSearchMobule from '../../utils/custom-hooks/useSearchMobule';
import searchMovies from '../../utils/searchMovies';

// Контекст
import { MovieListContext } from '../../context/movieListContext';

function SearchForm({ setResultSearch, setIsActiveButton, setCheckFilter, checkFilter }) {
  const [ searchValueMovies, setSearchValueMovies ] = useState('');

  // Контекст
  const movieList = useContext(MovieListContext);

  const isMobuleSearch = useSearchMobule(601);

  // По умолчанию state равен null, в случае если мобильный экран true или false,
  // только тогда вырисовываем компоненты. Иначе будет дергающий экран.
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
    const result = searchMovies(movieList, searchValueMovies, checkFilter);
    setResultSearch(result);

    // При новом поиске, кнопку еще делаю активной.
    setIsActiveButton(true);
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
