import React from 'react';
import './aboutProject.css';

// Компоненты
import StageTitle from '../stage-title/StageTitle';

function AboutProject() {
  return (
    <section className='about-project project__margin-auto'>
      <StageTitle title={ 'О проекте' } elementClass={ 'about-project__title-stage' } />
      <div className='about-project__content'>
        <h3 className='about-project__title'>
          Дипломный проект включал 5 этапов
        </h3>
        <p className='about-project__desc'>
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
        <h3 className='about-project__title'>
          На выполнение диплома ушло 5 недель
        </h3>
        <p className='about-project__desc'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='about-project__time-scheme'>
        <h4 className='about-project__time-scheme-title'>
          1 неделя
        </h4>
        <p className='about-project__time-scheme-desc'>
          Back-end
        </p>
        <h4 className='about-project__time-scheme-title about-project__time-scheme-title_color_light'>
          4 неделя
        </h4>
        <p className='about-project__time-scheme-desc'>
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
