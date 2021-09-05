import { useState, useEffect } from 'react';

// utils
// import checkWindowWidth from '../checkWindowWidth';

const useMobuleMenu = ( windowWidth ) => {
  const [mobuleMenu, setMobuleMenu] = useState(false);

  const checkWidth = () => {
    if (window.screen.width < windowWidth) {
      return setMobuleMenu(true);
    }
    setMobuleMenu(false);
  };

  useEffect(() => {
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [ windowWidth, mobuleMenu ]);

  useEffect(() => {
    checkWidth();
  }, []);

  return mobuleMenu;
}

export default useMobuleMenu;
