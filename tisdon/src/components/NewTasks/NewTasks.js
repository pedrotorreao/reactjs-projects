import React from 'react';
import TaskInput from './TaskInput';

import './NewTasks.css';

const NewTask = (props) => {
  const saveTaskDataHandler = (newTaskData) => {
    const taskData = {
      ...newTaskData,
      id: (Math.floor(Math.random() * 1000) + 1).toString()
    };

    props.onAddNewTask(taskData);
  };
  return (
    <div className='new-task'>
      <TaskInput onSaveTaskData={saveTaskDataHandler} />
    </div>
  );
};

export default NewTask;
