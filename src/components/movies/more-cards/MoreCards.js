import React, { useContext, useEffect } from 'react';
import './moreCards.css';

// Контекст
import { MovieListContext } from '../../../context/movieListContext';

function MoreCards(
  {
    setAmountMoviesList,
    moviesListAmount,
    resultSearch,
    amount,
    setCount,
    count,
    setIsActiveButton,
    isActiveButton
  })
{
  // Контекст
  const movieList = useContext(MovieListContext);

  useEffect(() => {
    return () => setIsActiveButton(true);
  }, []);

  // Кнопка не доступна
  useEffect(() => {
    if (resultSearch.length === moviesListAmount.length) {
      setIsActiveButton(false);
    }
  }, [ resultSearch, moviesListAmount ]);

  const loadMoreСards = e => {
    if (resultSearch) {
      setAmountMoviesList(resultSearch.slice(0, count * amount));
    } else {
      const cardList = movieList.slice(0, count * amount);
      setAmountMoviesList(cardList);
      
      // После того как все вывелось, отменяю кнопку
      if (cardList.length === movieList.length) {
        setIsActiveButton(false);
      }
    }

    setCount(count + 1);
  };

  const cardsButton = isActiveButton ?
  'more-cards__button' :
  'more-cards__button more-cards__button_disabled';

  return (
    <section className='more-cards movies_margin_center'>
      {
        moviesListAmount.length < amount ?
        '' :
        <button className={ cardsButton } onClick={ loadMoreСards } disabled={ !isActiveButton }>
          Ещё
        </button>
      }
    </section>
  );
}

export default MoreCards;
