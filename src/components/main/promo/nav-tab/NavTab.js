import React from 'react';
import { Link } from 'react-router-dom';
import './navTab.css';

function NavTab() {
  return (
    <Link to='/' className='promo__navigation' >
      Узнать больше
    </Link>
  );
}

export default NavTab;
