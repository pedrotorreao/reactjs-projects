import React, { useState } from 'react';

import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';

import './App.css';

function App() {
  const [userData, setUserData] = useState([
    { username: 'Pedro', age: 28, id: 'usr1' },
    { username: 'Carol', age: 20, id: 'usr2' }
  ]);

  const createUserHandler = (enteredUserData) => {
    setUserData((prevUsers) => {
      const updatedUsers = [...prevUsers];

      updatedUsers.unshift({
        ...enteredUserData,
        id: Math.random().toString()
      });

      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No users yet. Maybe add a few?</p>
  );

  if (userData.length > 0) {
    content = <UserList items={userData} />;
  }

  return (
    <div>
      <section className='user-form'>
        <UserInput onCreateUser={createUserHandler} />
      </section>
      <section className='users'>{content}</section>
    </div>
  );
}

export default App;
