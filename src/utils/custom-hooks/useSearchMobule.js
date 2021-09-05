import { useState, useEffect } from 'react';

const useSearchMobule = ( windowWidth ) => {
  const [mobuleSearch, setMobuleSearch] = useState(false);

  const checkWidth = () => {
    if (window.screen.width < windowWidth) {
      return setMobuleSearch(true);
    }
    setMobuleSearch(false);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [ windowWidth, mobuleSearch ]);

  useEffect(() => {
    checkWidth();
  }, []);

  return mobuleSearch;
}

export default useSearchMobule;
