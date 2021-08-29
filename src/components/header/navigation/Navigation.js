import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav className='header__navigation'>
      <ul className='header__navigation-list'>
        <li className='header__navigation-item'>
          <NavLink
            exact to='/main'
            activeClassName='header__navigation-link_active'
            className='header__navigation-link'
          >
            Фильмы
          </NavLink>
        </li>
        <li className='header__navigation-item'>
          <NavLink
            exact to='/'
            activeClassName='header__navigation-link_active'
            className='header__navigation-link'
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
