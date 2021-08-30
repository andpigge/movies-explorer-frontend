import React from 'react';
import './navigation.css';

// Компоненты
import NavigationItem from './navigation-item/NavigationItem';

function Navigation({ textList, navLink, modifierNavigationClass = false }) {
  const {
    navigationClass,
    navigationListClass,
    navigationItemClass,
    navigationLinkActive,
  } = modifierNavigationClass;

  const headerNavigation = navigationClass ?
  `header__navigation ${navigationClass}` :
  'header__navigation';
  const headerNavigationList = navigationListClass ?
  `header__navigation-list ${navigationListClass}` :
  'header__navigation-list';
  const headerNavigationItem = navigationItemClass ?
  `header__navigation-item ${navigationItemClass}` :
  'header__navigation-item';

  return (
    <nav className={ headerNavigation }>
      <ul className={ headerNavigationList }>
        {
          textList.map((text, i) => {
            return <NavigationItem
              key={ i }
              text={ text }
              navLink={ navLink[i] }
              headerNavigationItem={ headerNavigationItem }
              navigationLinkActive={ navigationLinkActive }
            />
          })
        }
      </ul>
    </nav>
  );
}

export default Navigation;
