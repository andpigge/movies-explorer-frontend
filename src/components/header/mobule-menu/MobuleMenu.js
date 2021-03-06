import React, { useState } from 'react';
import './mobuleMenu.css';

// Компоненты
import ProfileLink from '../profile-link/ProfileLink';
import Navigation from '../navigation/Navigation';
import HeaderToggleMenu from './header-toggle-menu/HeaderToggleMenu';

// constants
import {
  textListMenuMobule,
  navLinkMenuMobule,
} from '../../../utils/constants';

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
              navLink={ navLinkMenuMobule }
              activeMenu={ activeMenu }
            />
            <ProfileLink activeMenu={ activeMenu } />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobuleMenu;
