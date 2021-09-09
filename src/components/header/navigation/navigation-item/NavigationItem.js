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
  const navigationLink = activeMenu ?
  'header__navigation-link header__navigation-link_mobule-menu' :
  'header__navigation-link';

  return (
    <li className={ navigationItem }>
      <NavLink
        exact
        to={ navLink }
        activeClassName={ navigationLinkActive }
        className={ navigationLink }
      >
        { text }
      </NavLink>
    </li>
  );
}

export default NavigationItem;
