import React from 'react';
import './aboutMe.css';

// Компоненты
import StageTitle from '../stage-title/StageTitle';
import LinkItem from './link-item/LinkItem';

// Аватар
import avatar from '../../../images/main-avatar.jpeg';

function AboutMe() {
  const aboutMeList = [
    'Vkontakte',
    'Github',
  ];

  const aboutMeListLink = [
    'https://vk.com/uie_n',
    'https://github.com/andpigge',
  ];

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
            Здесь должна быть моя история, но я полинился ее написать. Нету для меня оправдания, но и вы не без греха.
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
