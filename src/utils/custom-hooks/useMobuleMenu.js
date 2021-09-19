// Константы
import { MENU_MOBULE_SCREEN } from '../constants';

import { useState, useEffect } from 'react';

const useMobuleMenu = () => {
  const [mobuleMenu, setMobuleMenu] = useState(null);

  const checkWidth = () => {
    if (window.innerWidth < MENU_MOBULE_SCREEN) {
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

export default useMobuleMenu;
