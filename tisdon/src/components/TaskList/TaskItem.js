import React from 'react';
import TaskDate from './TaskDate';

import Card from '../UI/Card';

import './TaskItem.css';

const TaskItem = (props) => {
  const checkedHandler = () => {
    console.log(`Task ${props.title} is complete`);
  };

  return (
    <li>
      <Card className={`task-item ${props.status}`}>
        <input
          className='task-item__status'
          type='checkbox'
          id=''
          name=''
          onClick={checkedHandler}
        />
        <TaskDate date={props.date} />
        <div className='task-item__description'>
          <h2>{props.title}</h2>
          <div
            className={`task-item__priority ${
              props.priority === 'high'
                ? 'high-priority'
                : props.priority === 'medium'
                ? ' medium-priority'
                : ' low-priority'
            }`}
          >
            {props.priority}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default TaskItem;
