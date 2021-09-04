import React from 'react';
import './headerToggleMenu.css';

function HeaderToggleMenu({ setActiveMenu, activeMenu }) {
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const toggleMenuClass = activeMenu ?
  'header__toggle-menu header__toggle-menu_active' :
  'header__toggle-menu';

  const activeMenuSetClass = (activeClass) => {
    if ( activeMenu ) {
      return `header__toggle-menu-item ${activeClass}`;
    }
    return 'header__toggle-menu-item';
  };

  return (
    <button type='button' className={ toggleMenuClass } onClick={ toggleMenu }>
      <ul className='header__toggle-menu-list'>
        <li className={ activeMenuSetClass('header__toggle-menu-item_rotate_right') }></li>
        <li className={ activeMenuSetClass('header__toggle-menu-item_active') }></li>
        <li className={ activeMenuSetClass('header__toggle-menu-item_rotate_left') }></li>
      </ul>
    </button>
  );
}

export default HeaderToggleMenu;
