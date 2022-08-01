import React from 'react';

import './Card.css';

const Card = (props) => {
  const classesDescr = 'card ' + props.className;

  return <div className={classesDescr}>{props.children}</div>;
};

export default Card;
