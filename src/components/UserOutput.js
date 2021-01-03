import React,{useState} from'react';
import './UserOutput.css';
const UserOutput=(props)=>{
  return(
    <div className="UserOutputContainer">
      <p clasName="UserOutputElement">
          UserName: {props.userName}
      </p>
      
      <p clasName="UserOutputElement">
         Hi {props.userName}
      </p>
    </div>
  )

}

export default UserOutput;

