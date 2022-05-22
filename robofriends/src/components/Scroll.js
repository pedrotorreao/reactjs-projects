import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return <div className='scrolling'>{props.children}</div>;
};

export default Scroll;
