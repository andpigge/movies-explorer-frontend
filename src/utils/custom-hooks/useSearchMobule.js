// Константы
import { SEARCH_MOBULE_SCREEN } from '../constants';

import { useState, useEffect } from 'react';

const useSearchMobule = () => {
  const [mobuleSearch, setMobuleSearch] = useState(null);

  const checkWidth = () => {
    if (window.innerWidth < SEARCH_MOBULE_SCREEN) {
      return setMobuleSearch(true);
    }
    setMobuleSearch(false);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [ mobuleSearch ]);

  useEffect(() => {
    checkWidth();
  }, []);

  return mobuleSearch;
}

export default useSearchMobule;
