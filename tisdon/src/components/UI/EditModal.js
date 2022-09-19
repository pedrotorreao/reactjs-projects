import React from 'react';
import ReactDOM from 'react-dom';

import NewTask from '../NewTasks/NewTasks';
import Button from './Button';
import './EditModal.css';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClick} />;
};

const Overlay = (props) => {
  return (
    <div className={`edit modal`}>
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
      <div className='content'>
        <p>{props.message}</p>
      </div>
      <footer className='actions'></footer>
      <Button type='button' onClick={props.onClick}>
        Update
      </Button>
      <Button type='button' onClick={props.onClick}>
        Cancel
      </Button>
    </div>
  );
};

const EditModal = (props) => {
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
  </React.Fragment>;
};

export default EditModal;
