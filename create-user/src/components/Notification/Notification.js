import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../UI/Button';

import './Notification.css';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClick} />;
};

const Overlay = (props) => {
  return (
    <div className={`notification modal`}>
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
      <div className='content'>
        <p>{props.message}</p>
      </div>
      <footer className='actions'></footer>
      <Button type='button' onClick={props.onClick}>
        Close
      </Button>
    </div>
  );
};

// Notification - stateful UI component:
const Notification = (props) => {
  // const onCloseHandler = (event) => {
  //   event.preventDefault();
  //   props.onClick();
  // };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Notification;
