import React, { useState } from 'react';

import Notification from '../Notification/Notification';
import Button from '../UI/Button';

import './UserInput.css';

// UserInput - stateful component
const UserInput = (props) => {
  // useState always return a (1)variable and a (2)function:
  // (1) points to the managed state variable
  // (2) can be called to update said variable
  const [newUsername, setNewUsername] = useState('');
  const [newUserAge, setNewUserAge] = useState('');
  const [error, setError] = useState();

  // listen for changes in the form inputs, whenever one
  // of the input fields changes, its specific function
  // will be called:
  const usernameChangeHandler = (event) => {
    setNewUsername(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setNewUserAge(event.target.value);
  };

  // listen for click on the button for the 'submit' event:
  const formSubmitHandler = (event) => {
    // prevent reload of the page once the form is submitted:
    event.preventDefault();

    // check if the data entered is valid:
    if (newUsername.trim().length === 0 || newUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter non-empty values for name and age.'
      });
      return;
    }
    if (+newUserAge < 1) {
      setError({
        title: 'Invalid age value!',
        message: 'Age must be greater than zero.'
      });
      return;
    }

    // create new user object w/ the newly submitted data:
    const userData = {
      username: newUsername,
      age: +newUserAge
    };

    // execute the function 'createUserHandler' passed down as a prop
    // from the 'App' component as 'onCreateUser' and pass it the new
    // expense object as argument, thus lifting this state up one more
    // level:
    props.onCreateUser(userData);

    // reset input fields:
    setNewUsername('');
    setNewUserAge('');
  };

  // reset error values:
  const errorHandler = () => {
    setError(null);
  };

  return (
    <section>
      {error && (
        <Notification
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
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
    </section>
  );
};

export default UserInput;
