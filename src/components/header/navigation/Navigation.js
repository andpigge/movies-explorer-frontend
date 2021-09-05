import React from 'react';
import './navigation.css';

// Компоненты
import NavigationItem from './navigation-item/NavigationItem';

function Navigation({ textList, navLink, activeMenu }) {

  const navigation = activeMenu ?
  'header__navigation header__navigation_position_mobule-menu' :
  'header__navigation';
  const navigationList = activeMenu ?
  'header__navigation-list header__navigation-list_position_mobule-menu' :
  'header__navigation-list';

  return (
    <nav className={ navigation }>
      <ul className={ navigationList }>
        {
          textList.map((text, i) => {
            return <NavigationItem
              key={ i }
              text={ text }
              navLink={ navLink[i] }
              activeMenu={ activeMenu }
            />
          })
        }
      </ul>
    </nav>
  );
}

export default Navigation;
