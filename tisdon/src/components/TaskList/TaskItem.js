import React from 'react';
import Card from '../UI/Card';

import './TaskItem.css';

const TaskItem = (props) => {
  return (
    <li>
      <div className='task-item'>
        <div className='task-item__description'>
          <h2>{props.title}</h2>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
