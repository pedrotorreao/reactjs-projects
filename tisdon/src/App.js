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
    id: 't00001',
    finished: true
  },
  {
    task: 'Finish homework',
    duedate: new Date(),
    priority: 'high',
    id: 't00002',
    finished: true
  },
  {
    task: 'Take out the trash',
    duedate: new Date(),
    priority: 'medium',
    id: 't00003',
    finished: true
  },
  {
    task: 'Mop the floor',
    duedate: new Date(),
    priority: 'low',
    id: 't00004',
    finished: false
  }
];

function App() {
  // useState always return a (1)variable and a (2)function:
  // (1) points to the managed state variable
  // (2) can be called to update said variable
  // individual state slices:
  //const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [tasks, setTasks] = useState(DUMMY_TASKS);
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

/*

1.:It would probably make things easier to not have the state variable 'finishedTasks'. Instead,
  filter 'tasks' based on the object 'finished' status.

2.:Maybe we could use a map when loading the components <Tasks/> and <TaskComplete/>

3.:Also, I think it may be better to separate this project into its own repo. I guess it'd make
  it simpler for versioning and branching.

4.:For the <EditModal/> component, reuse <NewTask/> as overlay.
*/
