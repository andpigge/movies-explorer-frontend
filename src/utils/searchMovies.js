const searchMoviesAll = (searchValue, pieceLowerCase, searchLowerCase) => {
  if (searchValue.length === 1) {
    return pieceLowerCase.startsWith(searchLowerCase);
  }
  return pieceLowerCase.includes(searchLowerCase);
};

const searchMoviesShorts = (movies, searchValue, pieceLowerCase, searchLowerCase) => {
  const searchDuration = movies.duration;

  if (searchDuration < 40) {
    return searchMoviesAll(searchValue, pieceLowerCase, searchLowerCase);
  }
};

function searchMovies(result, searchValue, checkFilter) {
  return result.filter(movies => {
    const pieceLowerCase = movies.nameRU.toLowerCase();
    const searchLowerCase = searchValue.toLowerCase();

    if (checkFilter) {
      return searchMoviesShorts(movies, searchValue, pieceLowerCase, searchLowerCase);
    }
    return searchMoviesAll(searchValue, pieceLowerCase, searchLowerCase);
  });
}

export default searchMovies;
