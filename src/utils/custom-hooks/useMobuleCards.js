import { useState, useEffect } from 'react';

const useMobuleCards = () => {
  const [mobuleMenu, setMobuleMenu] = useState(null);

  const checkWidth = () => {
    if (window.innerWidth < 601) {
      return setMobuleMenu(true);
    }
    setMobuleMenu(false);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [ mobuleMenu ]);

  useEffect(() => {
    checkWidth();
  }, []);

  return mobuleMenu;
}

export default useMobuleCards;
