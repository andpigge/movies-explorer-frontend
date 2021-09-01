import React from 'react';
import './portfolio.css';

// Компоненты
import PortfolioLink from './portfolio-link/PortfolioLink';

function Portfolio() {
  const portfolioList = [
    'Статичный сайт',
    'Адаптивный сайт',
    'Одностраничное приложение',
  ];

  const portfolioListLink = [
    'https://vk.com/uie_n',
    'https://github.com/andpigge',
    'https://github.com/andpigge',
  ];

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
