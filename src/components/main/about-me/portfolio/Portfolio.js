import React from 'react';
import './portfolio.css';

// Компоненты
import PortfolioLink from './portfolio-link/PortfolioLink';

// constants
import {
  portfolioList,
  portfolioListLink,
 } from '../../../../utils/constants';

function Portfolio() {
  return (
    <section className='portfolio project__margin-auto'>
      <h4 className='portfolio__title'>
        Портфолио
      </h4>
      <ul className='portfolio__list'>
        {
          portfolioList.map((portfolio, i) => {
            return <PortfolioLink key={ i } text={ portfolio } link={ portfolioListLink[i] } />
          })
        }
      </ul>
    </section>
  );
}

export default Portfolio;
