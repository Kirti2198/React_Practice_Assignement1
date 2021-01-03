import React,{useState} from'react';
import './UserInput.css'
const UserInput=(props)=>{
  return(
    <div className="userInputContainer">
      <input className="Input" type="text"  onChange={props.changed} value={props.userName}></input>
    </div>
  )

}

export default UserInput;


