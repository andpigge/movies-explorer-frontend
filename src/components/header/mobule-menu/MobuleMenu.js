import React, { /* useEffect, */ useState } from 'react';
import './mobuleMenu.css';

// Компоненты
import ProfileLink from '../profile-link/ProfileLink';
import Navigation from '../navigation/Navigation';
import HeaderToggleMenu from './header-toggle-menu/HeaderToggleMenu';

// constants
import {
  textListMenuMobule,
  navLinkMenuMobule,
  modifierNavigationClass,
  modifierProfileLink,
} from '../../../utils/constants';

// utile
// import closeMenuOnEsc from '../../../utils/closeMenuOnEsc';

function MobuleMenu() {
  const [ activeMenu, setActiveMenu ] = useState(false);

  const mobuleMenuClass = activeMenu ?
  'mobule-menu mobule-menu_active' :
  'mobule-menu';
  const mobuleMenuContainerClass = activeMenu ?
  'mobule-menu__container mobule-menu__container_active' :
  'mobule-menu__container';
  const mobuleMenuContentClass = activeMenu ?
  'mobule-menu__content mobule-menu__content_active' :
  'mobule-menu__content';

  // const closeMenuOnEsc = e => {
  //   console.log(1)
  //   if (activeMenu && e.key === 'Escape') {
  //     setActiveMenu(false)
  //   }
  // }

  // useEffect(() => {
  //   console.log(activeMenu)
  //   return () => {
  //     if (activeMenu === false) {
  //       document.removeEventListener('keydown', closeMenuOnEsc);
  //       return;
  //     }
  //     console.log(10)
  //     document.addEventListener('keydown', closeMenuOnEsc);
  //   }
  // }, [ activeMenu ]);

  // Закрытие меню по нажатию на контейнер
  function closeMenuOnContainer(e) {
    if (e.target.className === mobuleMenuContainerClass) {
      setActiveMenu(false)
    }
  }

  return (
    <>
      <HeaderToggleMenu setActiveMenu={ setActiveMenu } activeMenu={ activeMenu } />
      <div className={ mobuleMenuClass }>
        <div className={ mobuleMenuContainerClass } onClick={ closeMenuOnContainer }>
          <div className={ mobuleMenuContentClass }>
            <Navigation
              textList={ textListMenuMobule }
              modifierNavigationClass={ modifierNavigationClass }
              navLink={ navLinkMenuMobule }
            />
            <ProfileLink modifierProfileLink={ modifierProfileLink } />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobuleMenu;
