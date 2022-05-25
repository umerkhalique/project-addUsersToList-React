import React from 'react'
import './UsersList.css'
export default function UsersList(props) {
  return (
    <div className="users-list">
        <div><span>Name: </span>{props.name}</div>
        <div><span>Age: </span>{props.age}</div>
        <div></div>
    </div>
  )
}
