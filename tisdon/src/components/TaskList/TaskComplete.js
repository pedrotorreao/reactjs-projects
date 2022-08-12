import React from 'react';
import TaskList from './TaskList';
import Card from '../UI/Card';

import './Tasks.css';
import './TaskComplete.css';

const TaskComplete = (props) => {
  return (
    <div>
      <Card className='tasks__complete'>
        <TaskList tasks={props.tasksDone} isActive={false} />
      </Card>
    </div>
  );
};

export default TaskComplete;

/*
      <Card className='tasks'>
        <TaskList tasks={props.tasks} />
      </Card>

  return (
    <div>
      <label>completed tasks</label>
      <ul className='completed-task-list'>
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
*/
