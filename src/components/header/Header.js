import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './header.css';

// Картинка
import logo from '../../images/svg/logo-icon.svg';

// Компоненты
import AuthLink from './auth-link/AuthLink';
import ProfileLink from './profile-link/ProfileLink';
import Navigation from './navigation/Navigation';
import MobuleMenu from './mobule-menu/MobuleMenu';

// Пользовательские хуки. HOC не подойдет
import useMobuleMenu from '../../utils/custom-hooks/useMobuleMenu';

// constants
import {
  textList,
  navLink,
} from '../../utils/constants';

function Header() {
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
    if (url === '/') {
      return (
        <AuthLink />
      )
    }
    return setMenuDisplay();
  }

  return (
      <header className='header page__margin-auto'>
        <Link to='/' className='header__link-logo' >
          <img src={ logo } alt='Логотип' className='header__logo' />
        </Link>
        {
          checkUrl()
        }
      </header>
  );
}

export default Header;
