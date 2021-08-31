import React from 'react';
import './techs.css';

// Компоненты
import StageTitle from '../stage-title/StageTitle';
import TechsItem from './techs-item/TechsItem';

function Techs() {
  const techList = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Git',
    'Express.js',
    'mongoDB',
  ];

  return (
    <div className='background-gray'>
      <section className='techs project__margin-auto'>
        <StageTitle title={ 'Технологии' } elementClass={ 'techs__title-stage' } />
        <h3 className='techs__title'>
          7 технологий
        </h3>
        <p className='techs__desc'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className='techs__list'>
          {
            techList.map((tech, i) => <TechsItem key={i} text={ tech } />)
          }
        </ul>
      </section>
    </div>
  );
}

export default Techs;
