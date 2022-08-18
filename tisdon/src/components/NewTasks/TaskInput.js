import React, { useState } from 'react';
import './TaskInput.css';

const TaskInput = (props) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newPriority, setNewPriority] = useState('low');

  const [isValidTitle, setIsValidTitle] = useState(true);

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidTitle(true);
    }
    setNewTitle(event.target.value);
  };
  const dueDateChangeHandler = (event) => {
    setNewDueDate(event.target.value);
  };
  const priorityChangeHandler = (event) => {
    setNewPriority(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (newTitle.trim().length === 0) {
      setIsValidTitle(false);
      return;
    }

    const newTaskData = {
      task: newTitle,
      duedate: new Date(newDueDate),
      priority: newPriority
    };

    props.onSaveTaskData(newTaskData);

    setNewTitle('');
    setNewDueDate('');
    setNewPriority('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-task__controls'>
        <div className='new-task__control'>
          <label>task title</label>
          <input type='text' value={newTitle} onChange={titleChangeHandler} />
        </div>

        <div className='new-task__control'>
          <label>due date</label>
          <input
            type='date'
            min='2022-01-01'
            max='2025-12-31'
            value={newDueDate}
            onChange={dueDateChangeHandler}
          />
        </div>

        <div className='new-task__control'>
          <label for='priority'>priority</label>
          <select
            name='priority'
            id='priority'
            onChange={priorityChangeHandler}
          >
            <option value='low'>low</option>
            <option value='medium'>medium</option>
            <option value='high'>high</option>
          </select>
        </div>

        <div className='new-task__actions'>
          <button type='submit'>Add Task</button>
        </div>
      </div>
    </form>
  );
};

export default TaskInput;
