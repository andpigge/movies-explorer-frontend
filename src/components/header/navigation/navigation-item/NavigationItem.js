import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigationItem.css';

function NavigationItem({ text, navLink, activeMenu }) {

  const navigationItem = activeMenu ?
  'header__navigation-item header__navigation-item_position_mobule-menu' :
  'header__navigation-item';
  const navigationLinkActive = activeMenu ?
  'header__navigation-link_mobule-menu_active' :
  'header__navigation-link_active';

  return (
    <li className={ navigationItem }>
      <NavLink
        exact
        to={ navLink }
        activeClassName={ navigationLinkActive }
        className='header__navigation-link'
      >
        { text }
      </NavLink>
    </li>
  );
}

export default NavigationItem;
