import React from 'react';
import './techsItem.css';

function TechsItem({ text }) {
  return (
    <li className='techs__item'>
      { text }
    </li>
  );
}

export default TechsItem;
