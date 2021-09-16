import React from 'react';
import './aboutMe.css';

// Компоненты
import StageTitle from '../stage-title/StageTitle';
import LinkItem from './link-item/LinkItem';

// Аватар
import avatar from '../../../images/main-avatar.jpeg';

// constants
import {
  aboutMeList,
  aboutMeListLink,
 } from '../../../utils/constants';

function AboutMe() {
  return (
    <section className='about-me project__margin-auto'>
      <StageTitle title={ 'Студент' } elementClass={ 'about-me__title-stage' } />
      <div className='about-me__conteiner'>
        <img alt='avatar' src={ avatar } className='about-me__avatar' />
        <div className='about-me__content'>
          <h3 className='about-me__name'>
            Рустам
          </h3>
          <h4 className='about-me__title'>
            Фронтенд-разработчик, 23 года
          </h4>
          <p className='about-me__desc'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
        </div>
        <ul className='about-me__list'>
            {
              aboutMeList.map((item, i) => {
                return <LinkItem
                  key={ i }
                  text={ item }
                  link={ aboutMeListLink[i] }
                />
              })
            }
          </ul>
      </div>
    </section>
  );
}

export default AboutMe;
