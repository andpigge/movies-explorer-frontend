import React from 'react';
import './navTab.css';

function NavTab({ aboutProjectRef }) {
  const learnMore = () => {
    aboutProjectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className='promo__navigation' onClick={ learnMore } >
      Узнать больше
    </button>
  );
}

export default NavTab;
