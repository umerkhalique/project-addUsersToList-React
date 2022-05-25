import React, { useState } from "react";
import "./NewUser.css";

export default function NewUser(props) {

const [name, setName] = useState('');
const [age, setAge] = useState('');



function submitFormHandler(event){
    event.preventDefault();
    if(name.trim().length === 0 || age.trim().length === 0){
      return;
    } 
    if(age < 1){
      return;
    }
    let userData = { name: name, age: age};
    props.data(userData);
    setName('');
    setAge('');
}



function changeNameHandler(event){
    setName(event.target.value);
}



function changeAgeHandler(event){
    setAge(event.target.value);
}



  return (
    <div className="main">
      <form onSubmit={submitFormHandler}>
        <div className="row">
          <label>Name:</label>
          <input value={name} type="text" onChange={changeNameHandler}></input>
        </div>
        <div className="row">
          <label className="row2">Age:</label>
          <input value={age} type="number" onChange={changeAgeHandler}></input>
        </div>
        <div className="btn-control">
            <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
}
