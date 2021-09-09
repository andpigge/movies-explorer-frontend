import React from 'react';
import './stageTitle.css';

function StageTitle({ title, elementClass = false }) {
  const titleClass = elementClass ?
  `stage-title ${ elementClass }` :
  'stage-title stage-title_reset_margin';

  return (
    <h2 className={ titleClass }>
      { title }
    </h2>
  );
}

export default StageTitle;
