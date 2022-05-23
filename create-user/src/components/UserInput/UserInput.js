import React, { useState } from 'react';

import Button from '../UI/Button';

import './UserInput.css';

const UserInput = (props) => {
  const [newUsername, setNewUsername] = useState('');
  const [newUserAge, setNewUserAge] = useState('');

  const usernameChangeHandler = (event) => {
    setNewUsername(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setNewUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: newUsername,
      age: +newUserAge
    };

    props.onCreateUser(userData);

    setNewUsername('');
    setNewUserAge('');
  };

  return (
    <form onSubmit={formSubmitHandler} style={{ textAlign: 'center' }}>
      <div className='form-control'>
        <label>Username</label>
        <input
          type='text'
          placeholder='enter name'
          value={newUsername}
          onChange={usernameChangeHandler}
        />
        <label>Age (Years)</label>
        <input
          type='number'
          placeholder='enter age'
          value={newUserAge}
          onChange={userAgeChangeHandler}
        />
      </div>
      <Button type='submit'>Add User</Button>
    </form>
  );
};

export default UserInput;
