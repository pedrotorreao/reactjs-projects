import React from 'react';
import TaskList from './TaskList';
import Card from '../UI/Card';

import './Tasks.css';

const Tasks = (props) => {
  return (
    <div>
      <Card className='tasks__active'>
        <TaskList tasks={props.tasks} isActive={true} />
      </Card>
    </div>
  );
};

export default Tasks;
