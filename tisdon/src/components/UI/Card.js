import React from 'react';

import './Card.css';

const Card = (props) => {
  const classesDescr = 'card ' + props.className;
  // the value of the 'children' property will always be the content
  // between the opening and closing tags of yout custom component
  return <div className={classesDescr}>{props.children}</div>;
};

export default Card;
