import React from 'react';
import './Users.css'
import UsersList from './UsersList'

export default function Users(props) {

  return (
    <div className="users">
        {props.data.map((user) => (<UsersList name={user.name} age={user.age}/>))}
    </div>
  )
}
