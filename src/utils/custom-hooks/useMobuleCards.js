import { useState, useEffect } from 'react';

const useMobuleMenu = ( windowWidth ) => {
  const [mobuleMenu, setMobuleMenu] = useState(null);

  const checkWidth = () => {
    if (window.innerWidth < windowWidth) {
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
