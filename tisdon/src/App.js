import React, { useState } from 'react';

import Tasks from './components/TaskList/Tasks';
import NewTasks from './components/NewTasks/NewTasks';
import TaskComplete from './components/TaskList/TaskComplete';

// dummy data for task list --delete later:
const DUMMY_TASKS = [
  {
    task: 'Do the dishes and clean the sink',
    duedate: new Date(),
    priority: 'low',
    id: 't00001'
  },
  {
    task: 'Finish homework',
    duedate: new Date(),
    priority: 'high',
    id: 't00002'
  },
  {
    task: 'Take out the trash',
    duedate: new Date(),
    priority: 'medium',
    id: 't00003'
  }
];

function App() {
  // useState always return a (1)variable and a (2)function:
  // (1) points to the managed state variable
  // (2) can be called to update said variable
  // individual state slices:
  //const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState(DUMMY_TASKS);

  // this function is passed down to 'NewTasks' as a prop in order
  // to retrieve the new task' data:
  const addTaskHandler = (taskData) => {
    setTasks((prevTasks) => {
      // if (prevTasks) return [taskData, ...prevTasks];
      // return [taskData];
      return [taskData, ...prevTasks];
    });
  };

  const completeTaskHandler = (taskData) => {
    setFinishedTasks((prevTasks) => {
      return [taskData, ...prevTasks];
    });
  };

  return (
    <React.Fragment>
      <NewTasks onAddNewTask={addTaskHandler} />
      <Tasks tasks={tasks} onCompleteTask={completeTaskHandler} />
      <TaskComplete tasksDone={finishedTasks} />
    </React.Fragment>
  );
}

export default App;
