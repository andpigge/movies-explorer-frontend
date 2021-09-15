import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import './header.css';

// Компоненты
import AuthLink from './auth-link/AuthLink';
import ProfileLink from './profile-link/ProfileLink';
import Navigation from './navigation/Navigation';
import MobuleMenu from './mobule-menu/MobuleMenu';
import Logo from '../logo/Logo';

// Пользовательские хуки. HOC не подойдет
import useMobuleMenu from '../../utils/custom-hooks/useMobuleMenu';

// constants
import {
  textList,
  navLink,
} from '../../utils/constants';

function Header({ loggedIn }) {
  const { url } = useRouteMatch();

  // Принимает минимальную ширину экрана для мобильной версии
  const isMobuleMenu = useMobuleMenu(769);

  // По умолчанию state равен null, в случае если мобильный экран true или false,
  // только тогда вырисовываем компоненты. Иначе будет дергающий экран.
  const setMenuDisplay = () => {
    if (isMobuleMenu === false) {
      return (
        <>
          <Navigation textList={ textList } navLink={ navLink } />
          <ProfileLink />
        </>
      );
    }
    if (isMobuleMenu === true) {
      return (
        <MobuleMenu />
      );
    }
  };

  const checkUrl = () => {
    if (url === '/' && !loggedIn) {
      return (
        <AuthLink />
      )
    }
    return setMenuDisplay();
  }

  return (
      <header className='header page__margin-auto'>
        <Logo />
        {
          checkUrl()
        }
      </header>
  );
}

export default Header;
