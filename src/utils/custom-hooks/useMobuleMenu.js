import { useState, useEffect } from 'react';

const useMobuleMenu = (windowWidth) => {
  const [mobuleMenu, setMobuleMenu] = useState(false);

  window.addEventListener('resize', () => {
    if (window.screen.width < windowWidth) {
      setMobuleMenu(true);
    } else {
      setMobuleMenu(false);
    }
  });

  useEffect(() => {
    if (window.screen.width < windowWidth) {
      setMobuleMenu(true);
    }
  }, [ windowWidth ]);

  return mobuleMenu;
}

export default useMobuleMenu;
