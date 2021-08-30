import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigationItem.css';

function NavigationItem({ text, headerNavigationItem, navigationLinkActive, navLink }) {
  return (
    <li className={ headerNavigationItem }>
      <NavLink
        exact
        to={ navLink }
        activeClassName={navigationLinkActive ? navigationLinkActive : 'header__navigation-link_active'}
        className='header__navigation-link'
      >
        { text }
      </NavLink>
    </li>
  );
}

export default NavigationItem;
