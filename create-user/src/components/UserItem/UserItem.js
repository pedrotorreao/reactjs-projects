import React from 'react';

import './UserItem.css';

// UserItem - stateless component:
const UserItem = (props) => {
  return <li className='user-item'>{props.children}</li>;
};

export default UserItem;
