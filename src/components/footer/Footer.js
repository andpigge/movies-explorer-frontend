import React from 'react';
import './footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer page__margin-auto'>
      <p className='footer__desc'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <span className='footer__line'></span>
      <div className='footer__container'>
        <p className='footer__year'>
          &#169; { year }
        </p>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a
              href='https://practicum.yandex.ru'
              target="_blank"
              rel="noreferrer"
              className='footer__link'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__item'>
            <a
              href='https://github.com/andpigge'
              target="_blank"
              rel="noreferrer"
              className='footer__link'
            >
              Github
            </a>
          </li>
          <li className='footer__item'>
            <a
              href='https://vk.com/uie_n'
              target="_blank"
              rel="noreferrer"
              className='footer__link'
            >
              Вконтакте
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
