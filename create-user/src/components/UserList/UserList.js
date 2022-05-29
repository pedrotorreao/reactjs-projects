import React from 'react';

import UserItem from '../UserItem/UserItem';

import './UserList.css';

// UserList - stateless component:
const UserList = (props) => {
  // map the user data passed as props into 'UserItem's components to be rendered:
  return (
    <ul className='user-list'>
      {props.items.map((user) => (
        <UserItem key={user.id} id={user.id}>
          {`${user.username} - ${user.age} years old`}
        </UserItem>
      ))}
    </ul>
  );
};

export default UserList;
