import React from 'react';
import './linkItem.css';

function LinkItem({ text, link }) {
  return (
    <li className='about-me__item'>
      <a
        href={ link }
        target='_blank'
        rel="noreferrer"
        className='about-me__link'
      >
        { text }
      </a>
    </li>
  );
}

export default LinkItem;
