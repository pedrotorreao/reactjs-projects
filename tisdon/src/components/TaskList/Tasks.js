import React from 'react';
import TaskList from './TaskList';
import Card from '../UI/Card';

import './Tasks.css';

const Tasks = (props) => {
  return (
    <div>
      <Card className='tasks'>
        <TaskList tasks={props.tasks} />
      </Card>
    </div>
  );
};

export default Tasks;
