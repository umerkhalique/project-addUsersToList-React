import React, { useState } from 'react';
import './App.css'
import NewUser from './components/NewUser'
import Users from './components/Users'
function App() {

  const dummy = []


  const [users, setUsers] = useState(dummy);
  
  function userDataProps(param){
    setUsers((prevState) => {
      return [param, ...prevState]
    })
  }



  return (
    <div className="container">
    <NewUser data={userDataProps}/>
    <Users data={users}/>
    </div>
  );
}

export default App;
