import React from 'react';
import TaskDate from './TaskDate';

import Card from '../UI/Card';

import './TaskItem.css';

const TaskItem = (props) => {
  let priority_class = 'task-item__priority';
  priority_class +=
    props.priority === 'high'
      ? ' high-priority'
      : props.priority === 'medium'
      ? ' medium-priority'
      : ' low-priority';
  //'task-item__priority high-priority'

  let item_class = 'task-item ' + props.status; //'task-item'

  return (
    <li>
      <Card className={item_class}>
        <TaskDate date={props.date} />
        <div className='task-item__description'>
          <h2>{props.title}</h2>
          <div className={priority_class}>{props.priority}</div>
        </div>
      </Card>
    </li>
  );
};

export default TaskItem;
