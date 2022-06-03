import React, { useState } from 'react';

import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';

import './App.css';

// array of dummy user objects:
const DUMMY_USERS = [
  { username: 'Pedro', age: 28, id: 'usr1' },
  { username: 'Carol', age: 20, id: 'usr2' }
];

function App() {
  const [userData, setUserData] = useState(DUMMY_USERS);

  // this function is passed down to 'UserInput' as a prop in order
  // to retrieve the new user data:
  const createUserHandler = (enteredUserData) => {
    // since our state update relies on the previous state, we need
    // to specify this in the 'setUserData' by passing it a function
    // to do that:
    setUserData((prevUsers) => {
      const updatedUsers = [...prevUsers];

      updatedUsers.unshift({
        ...enteredUserData,
        id: Math.random().toString()
      });

      return updatedUsers;
    });
  };

  // content to be loaded below the input form:
  // - if no users are added, it defaults to a message
  let content = (
    <p style={{ textAlign: 'center' }}>No users yet. Maybe add a few?</p>
  );
  // - otherwise, it loads a 'UserList' component containing all the
  // 'UserItem's components added through the 'UserInput' component:
  if (userData.length > 0) {
    content = <UserList items={userData} />;
  }

  return (
    <React.Fragment>
      <section className='user-form'>
        <UserInput onCreateUser={createUserHandler} />
      </section>
      <section className='users'>{content}</section>
    </React.Fragment>
  );
}

export default App;
