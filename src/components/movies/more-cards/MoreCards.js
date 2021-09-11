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

  const loadMoreСards = e => {
    if (resultSearch) {
      const cardList = resultSearch.slice(0, count * amount);
      setAmountMoviesList(cardList);

      if (resultSearch.length === moviesListAmount.length) {
        setIsActiveButton(false);
      }
      return;
    }

    const cardList = movieList.slice(0, count * amount);
    setAmountMoviesList(cardList);

    setCount(count + 1);

    // После того как все вывелось, отменяю кнопку
    if (cardList.length === movieList.length) {
      setIsActiveButton(false);
    }
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
