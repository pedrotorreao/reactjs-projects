import React from 'react';
import TaskItem from './TaskItem';
// import Card from '../UI/Card';

import './TaskList.css';

const TaskList = (props) => {
  if (props.tasks.length === 0) {
    return (
      <h2 className='task-list__fallback'>No tasks found. Perhaps add some?</h2>
    );
  }

  return (
    <div>
      <label>active tasks</label>
      <ul className='task-list'>
        {props.tasks.map((currentTask) => (
          <TaskItem
            key={currentTask.id}
            title={currentTask.task}
            date={currentTask.duedate}
            priority={currentTask.priority}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
