import React, { useState } from 'react';
import './mobuleMenu.css';

// Компоненты
import ProfileLink from '../profile-link/ProfileLink';
import Navigation from '../navigation/Navigation';

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

  // Закрытие меню по нажатию на esc
  function closeMenuOnEsc(e) {
    if (activeMenu && e.key === 'Escape') {
      setActiveMenu(false)
    }
  }
  document.addEventListener('keydown', closeMenuOnEsc);

  // Закрытие меню по нажатию на контейнер
  function closeMenuOnContainer(e) {
    if (e.target.className === mobuleMenuContainerClass) {
      setActiveMenu(false)
    }
  }

  const textList = [
    'Главная',
    'Фильмы',
    'Сохранённые фильмы',
  ];

  const navLink = [
    '/main1',
    '/main',
    '/main3',
  ];

  // Необязательный обьект для навигации. Устанавливает модификаторы
  const modifierNavigationClass = {
    navigationClass: 'header__navigation_position_mobule-menu',
    navigationListClass: 'header__navigation-list_position_mobule-menu',
    navigationItemClass: 'header__navigation-item_position_mobule-menu',
    navigationLinkActive: 'header__navigation-link_mobule-menu_active',
  };

  const modifierProfileLink = {
    profileLink: 'header__profile-link_position_mobule-menu',
  };

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const activeMenuSetClass = (activeClass) => {
    if ( activeMenu ) {
      return `header__toggle-menu-item ${activeClass}`;
    }
    return 'header__toggle-menu-item';
  };

  return (
    <>
      {/* menu-toggle */}
      <button type='button' className='header__toggle-menu' onClick={ toggleMenu }>
          <ul className='header__toggle-menu-list'>
            <li className={ activeMenuSetClass('header__toggle-menu-item_rotate_right') }></li>
            <li className={ activeMenuSetClass('header__toggle-menu-item_active') }></li>
            <li className={ activeMenuSetClass('header__toggle-menu-item_rotate_left') }></li>
          </ul>
        </button>
      <div className={ mobuleMenuClass }>
        <div className={ mobuleMenuContainerClass } onClick={ closeMenuOnContainer }>
          <div className={ mobuleMenuContentClass }>
            <Navigation textList={ textList } modifierNavigationClass={ modifierNavigationClass } navLink={ navLink } />
            <ProfileLink modifierProfileLink={ modifierProfileLink } />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobuleMenu;
