import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

// Картинка
import logo from '../../images/svg/logo-icon.svg';

// Компоненты
import AuthLink from './auth-link/AuthLink';
// import ProfileLink from './profile-link/ProfileLink';
// import Navigation from './navigation/Navigation';
// import MobuleMenu from './mobule-menu/MobuleMenu';

// Пользовательские хуки. HOC не подойдет
// import useMobuleMenu from '../../utils/custom-hooks/useMobuleMenu';

// constants
// import {
//   textList,
//   navLink,
// } from '../../utils/constants';

function Header() {
  // Принимает минимальную ширину экрана для мобильной версии
  // const isMobuleMenu = useMobuleMenu(769);

  return (
    <div className='background'>
      <header className='header page__margin-auto'>
        <Link to='/main' className='header__link-logo' >
          <img src={ logo } alt='Логотип' className='header__logo' />
        </Link>
        <AuthLink />
        {/* {
          isMobuleMenu ?
            <MobuleMenu />
          :
            <>
              <Navigation textList={ textList } navLink={ navLink } />
              <ProfileLink />
            </>
        } */}
      </header>
    </div>
  );
}

export default Header;
