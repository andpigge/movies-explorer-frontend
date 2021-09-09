import React from 'react';
import './portfolioLink.css';

function PortfolioLink({ text, link }) {
  return (
    <li className='portfolio__item'>
      <a href={ link } target='_blank' rel="noreferrer" className='portfolio__link' >
        { text }
        <span className='portfolio__arrow'>
          &#8599;
        </span>
      </a>
    </li>
  );
}

export default PortfolioLink;
