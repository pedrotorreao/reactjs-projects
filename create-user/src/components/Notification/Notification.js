import React from 'react';
import Button from '../UI/Button';

import './Notification.css';

// Notification - stateful UI component:
const Notification = (props) => {
  const onCloseHandler = (event) => {
    event.preventDefault();
    props.onClick();
  };

  return (
    <React.Fragment>
      <div className='backdrop' onClick={onCloseHandler}></div>
      <div className={`notification modal`}>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='actions'></footer>
        <Button type='button' onClick={onCloseHandler}>
          Close
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Notification;
