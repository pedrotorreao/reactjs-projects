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
